import { useState } from 'react';
import Button from './UI/Button/ButtonTypeA/Button';
import { checkUser } from '../services/auth';
import Notification from './UI/Notification/Notification';

export default function MethodCard({ imgSrc, title, description, onClick }) {
	const [notifications, setNotifications] = useState([]);

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
		const isAuthenticated = await checkUser();
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

	return (
		<>
			<div className="bg-gray-400 min-h-[400px] flex flex-col rounded-2xl mx-4 items-center mb-5 mt-5">
				<img src={imgSrc} alt="MethodImg" className="h-[300px] w-[60%] mt-5 rounded-2xl" />
				<div className="flex flex-col items-center mb-6 flex-grow w-full px-4">
					<p className="text-xl font-medium pb-3">{title}</p>
					<p className="px-3 pt-3 pb-6">{description}</p>
					<Button onClick={handleClick} className="mt-[auto]">
						Пройти тестирование
					</Button>
				</div>
			</div>
			<Notification notifications={notifications} />
		</>
	);
}
