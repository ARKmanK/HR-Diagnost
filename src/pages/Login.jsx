import { useState, useEffect } from 'react';
import RegistryForm from '../components/RegistryForm';
import LoginForm from '../components/LoginForm';
import Header from '../components/UI/Header';
import VideoBackground from '../components/VideoBackground';
import ProfileBox from '../components/ProfileBox';

export default function Login() {
	const [showLoginForm, setShowLoginForm] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки

	// Обработчик успешного входа
	const handleLoginSuccess = (user) => {
		console.log('User logged in:', user); // Добавьте это для диагностики
		setIsAuthenticated(true);
		setUser(user);
	};

	// Обработчик успешной регистрации
	const handleSignUpSuccess = (user) => {
		console.log('User signed up:', user); // Добавьте это для диагностики
		setIsAuthenticated(true);
		setUser(user);
	};

	// Обработчик успешного выхода
	const handleLogoutSuccess = () => {
		setIsAuthenticated(false);
		setUser(null);
	};

	// Если данные загружаются, показываем заглушку
	if (isLoading) {
		return (
			<>
				<div className="max-w-[1200px] mx-auto">
					<Header />
					<div>Загрузка...</div>;
				</div>
			</>
		);
	}

	return (
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
						<RegistryForm
							onSuccessfulSignUp={handleSignUpSuccess}
							onSwitchToLogin={() => setShowLoginForm(true)}
						/>
					)}
				</VideoBackground>
			)}
		</div>
	);
}
