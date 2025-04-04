import { useState, useEffect } from 'react';
import Header from '../components/UI/Header';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import VideoBackground from '../components/VideoBackground';
import ProfileBox from '../components/ProfileBox';
import Notification from '../components/UI/Notification/Notification';

export default function Login() {
	const [showLoginForm, setShowLoginForm] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('authToken');
		if (token) {
			setIsAuthenticated(true);
		}
	}, [isAuthenticated]);

	/* useEffect(() => {
		console.log('isAuthenticated: ', isAuthenticated);
	}); */

	// Обработчик успешного входа
	/* const handleLoginSuccess = (user) => {
		console.log('User logged in:', user); // Добавьте это для диагностики
		setIsAuthenticated(true);
		setUser(user);
	}; */

	// Обработчик успешной регистрации
	/* const handleSignUpSuccess = (user) => {
		console.log('User signed up:', user); // Добавьте это для диагностики
		setIsAuthenticated(true);
		setUser(user);
	}; */

	// Обработчик успешного выхода
	/* const handleLogoutSuccess = () => {
		setIsAuthenticated(false);
		setUser(null);
	}; */

	// Если данные загружаются, показываем заглушку
	/* if (isLoading) {
		return (
			<>
				<div className="max-w-[1200px] mx-auto">
					<Header />
					<div>Загрузка...</div>;
				</div>
			</>
		);
	} */
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

	const handleSignUpSuccess = () => {
		addNotification('success', 'Успешно', 'Регистрация прошла успешно');
	};

	const handleLoginSuccess = () => {
		addNotification('success', 'Успешно', 'Вход разрешен');
		setIsAuthenticated(true);
	};

	const handleLogoutSuccess = () => {
		addNotification('success', 'Успешно', 'Увидимся');
	};

	return (
		<>
			<div className="max-w-[1200px] mx-auto">
				<Header />
				{isAuthenticated ? (
					<ProfileBox user={user} onSuccessfulLogout={handleLogoutSuccess} />
				) : (
					<VideoBackground>
						{showLoginForm ? (
							<>
								<LoginForm onSuccessfulLogin={handleLoginSuccess} />
								<button
									className="border border-white text-white text-sm rounded-xl p-2"
									onClick={() => setShowLoginForm(false)}
								>
									Зарегистрироваться
								</button>
							</>
						) : (
							<RegisterForm
								onSuccessfulSignUp={handleSignUpSuccess}
								onSwitchToLogin={() => setShowLoginForm(true)}
							/>
						)}
					</VideoBackground>
				)}
			</div>
			<Notification notifications={notifications} />
		</>
	);
}
