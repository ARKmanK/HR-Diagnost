import React from 'react';
import { useState, useEffect } from 'react';

import Header from '@components/UI/Header';
import RegisterForm from '@components/RegisterForm';
import LoginForm from '@components/LoginForm';
import VideoBackground from '@components/VideoBackground';
import ProfileBox from '@components/ProfileBox';
import Notification from '@components/UI/Notification/Notification';

export default function Login() {
	const [showLoginForm, setShowLoginForm] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('authToken');
		if (token) {
			setIsAuthenticated(true);
		}
	}, []);

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

	const handleLoginSuccess = () => {
		addNotification('success', 'Успешно', 'Вход разрешен');
		setIsAuthenticated(true);
	};

	const handleSignUpSuccess = () => {
		addNotification('success', 'Успешно', 'Регистрация прошла успешно');
	};

	const handleLogoutSuccess = () => {
		setIsAuthenticated(false);
		setUser(null);
		addNotification('success', 'Успешно', 'Увидимся');
	};

	return (
		<>
			<div className='max-w-[1200px] mx-auto'>
				<Header />
				{isAuthenticated && <ProfileBox user={user} onSuccessfulLogout={handleLogoutSuccess} />}

				{!isAuthenticated && (
					<VideoBackground>
						{showLoginForm && (
							<>
								<LoginForm onSuccessfulLogin={handleLoginSuccess} />
								<button
									className='border border-white text-white text-sm rounded-xl p-2'
									onClick={() => setShowLoginForm(false)}
								>
									Зарегистрироваться
								</button>
							</>
						)}
						{!showLoginForm && (
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
