import React from 'react';
import { useState } from 'react';

import { ArrowBigLeft } from 'lucide-react';
import { signUp } from '@services/auth';
import useNotification from '@hooks/useNotification';
import Notification from '@components/UI/Notification/Notification';

export default function RegisterForm({ onSuccessfulSignUp, onSwitchToLogin }) {
	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [lastRequestTime, setLastRequestTime] = useState(null);
	const { notifications, addNotification } = useNotification();

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const isValidPassword = (password) => {
		return password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const currentTime = Date.now();
		if (lastRequestTime && currentTime - lastRequestTime < 20000) {
			addNotification(
				'info',
				'Ожидайте',
				'Пожалуйста, подождите немного перед повторной отправкой запроса.'
			);
			return;
		}

		if (!username || !email || !password) {
			addNotification('warning', 'Предупреждение', 'Все поля должны быть заполнены');
			return;
		}

		if (name.length === 0) {
			addNotification('warning', 'Предупреждение', 'Поле "name" должно быть заполнено');
			return;
		}

		if (surname.length === 0) {
			addNotification('warning', 'Предупреждение', 'Поле "surname" должно быть заполнено');
			return;
		}

		if (!isValidEmail(email)) {
			addNotification('error', 'Неправильная почта', 'Пожалуйста, введите корректный email.');
			return;
		}

		if (!isValidPassword(password)) {
			addNotification(
				'warning',
				'Неправильный пароль',
				'Пароль должен содержать минимум 6 символов, включая хотя бы одну букву и одну цифру.'
			);
			return;
		}

		try {
			await signUp(username, name, surname, email, password);
			onSuccessfulSignUp();
			addNotification(
				'success',
				'Успешно',
				'Регистрация прошла успешно, можете перейти в раздел авторизации'
			);
		} catch (error) {
			addNotification('error', 'Ошибка', 'Ошибка при регистрации' + error.message);
		}
	};

	return (
		<>
			<div className='rounded-2xl flex flex-col'>
				<div className='m-3'>
					<div className='text-white'>
						<p className='text-2xl mb-2'>Создать аккаунт</p>
						<p>Введите вашу почту ниже для создания аккаунта</p>
					</div>
					<div className=''>
						<form onSubmit={handleSubmit} className='flex flex-col mt-3'>
							<input
								type='text'
								placeholder='Username'
								value={username}
								className='p-2 m-3 border border-white rounded-xl text-white'
								onChange={(e) => setUsername(e.target.value)}
								autoFocus
							/>
							<input
								type='text'
								placeholder='Name'
								value={name}
								className='p-2 m-3 border border-white rounded-xl text-white'
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Surname'
								value={surname}
								className='p-2 m-3 border border-white rounded-xl text-white'
								onChange={(e) => setSurname(e.target.value)}
							/>
							<input
								type='email'
								placeholder='Email'
								value={email}
								className='p-2 m-3 border border-white rounded-xl text-white'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type='password'
								placeholder='Password'
								value={password}
								className='p-2 m-3 border border-white rounded-xl text-white'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								type='submit'
								className='cursor-pointer p-2 m-3 border border-white rounded-xl text-white'
							>
								Register
							</button>
						</form>
						<div className='mt-3'>
							<button
								className='cursor-pointer flex border border-white rounded-xl py-1 px-2 text-white'
								onClick={onSwitchToLogin}
							>
								<ArrowBigLeft size={22} className='text-white' />
								Вернуться
							</button>
						</div>
					</div>
				</div>
			</div>
			<Notification notifications={notifications} />
		</>
	);
}
