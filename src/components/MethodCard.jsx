import { useState, useEffect } from 'react';
import Button from './UI/Button/ButtonTypeA/Button';
import Notification from './UI/Notification/Notification';

export default function MethodCard({ imgSrc, title, description, onClick }) {
	const [notifications, setNotifications] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

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

	const handleClick = async () => {
		if (!isAuthenticated) {
			addNotification(
				'error',
				'Ошибка авторизации',
				'Войдите в систему для прохождения тестирования'
			);
		} else {
			onClick();
		}
	};
	//  background: -webkit-linear-gradient(176deg, #856b2c,#c3613c,#f54d7f); background: linear-gradient(176deg, #856b2c,#c3613c,#f54d7f);
	return (
		<>
			<div className='method-card bg-gray-400 min-h-[400px] flex flex-col rounded-2xl mx-4 items-center mb-5 mt-5'>
				<img src={imgSrc} alt='MethodImg' className='h-[280px] w-[60%] mt-5 rounded-2xl' />
				<div className='flex flex-col items-center mb-6 mt-3 flex-grow w-full px-4'>
					<p className='text-xl font-medium pb-3'>{title}</p>
					<p className='px-3 pt-3 pb-6'>{description}</p>
					<Button onClick={handleClick} className='mt-[auto]'>
						Пройти тестирование
					</Button>
				</div>
			</div>
			<Notification notifications={notifications} />
		</>
	);
}
