import { useState } from 'react';
import { signIn } from '../services/auth';
import Notification from './UI/Notification/Notification';

export default function LoginForm({ onSuccessfulLogin }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [notifications, setNotifications] = useState([]);

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const addNotification = (type, title, message) => {
		setNotifications((prevNotifications) => {
			const newNotification = { type, title, message };

			if (prevNotifications.length >= 4) {
				prevNotifications.shift();
			}
			return [...prevNotifications, newNotification];
		});

		setTimeout(() => {
			setNotifications((prevNotifications) => prevNotifications.filter((_, index) => index !== 0));
		}, 4000);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!isValidEmail(email)) {
			addNotification('error', 'Неправильная почта', 'Пожалуйста, введите корректный email.');
			return;
		}

		try {
			const user = await signIn(email, password);
			onSuccessfulLogin(user);
			addNotification('success', 'Успешно', 'Вход успешен');
		} catch (error) {
			addNotification('error', 'Ошибка', 'Ошибка при входе');
			setError('Ошибка при входе: ' + error.message);
		}
	};

	return (
		<>
			<div className="rounded-2xl flex flex-col">
				<div className="m-3">
					<div className="text-white">
						<p className="text-2xl mb-2">Вход в аккаунт</p>
						<p>Введите вашу почту ниже для входа</p>
					</div>
					<div>
						<form onSubmit={handleSubmit} className="flex flex-col mt-3">
							<input
								type="email"
								placeholder="Email"
								value={email}
								className="p-2 m-3 border border-white rounded-xl text-white"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type="password"
								placeholder="Password"
								value={password}
								className="p-2 m-3 border border-white rounded-xl text-white"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								type="submit"
								className="cursor-pointer p-2 m-3 border-2 border-white rounded-xl text-white text-lg"
							>
								Войти
							</button>
						</form>
					</div>
				</div>
			</div>
			<Notification notifications={notifications} />
		</>
	);
}
