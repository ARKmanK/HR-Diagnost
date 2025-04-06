import React from 'react';
import { useState, useEffect } from 'react';

import Button from './UI/Button/ButtonTypeA/Button';
import Notification from './UI/Notification/Notification';

export default function MethodCard({ imgSrc, title, description, onClick, testName }) {
	const [notifications, setNotifications] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [testStatus, setTestStatus] = useState('not-started');

	useEffect(() => {
		const token = localStorage.getItem('authToken');
		if (token) {
			setIsAuthenticated(true);
		}

		const checkTestStatus = () => {
			const stats = localStorage.getItem('userStats');
			if (stats) {
				try {
					const userStats = JSON.parse(stats);
					const currentTest = userStats.find((test) => test.testName === testName);

					if (currentTest) {
						setTestStatus(currentTest.status || 'not-started');
					}
				} catch (e) {
					console.error('Error parsing userStats:', e);
				}
			}
		};

		checkTestStatus();
	}, [testName]);

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

	const startTest = async () => {
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

	const replayTest = async () => {
		const userStats = JSON.parse(localStorage.getItem('userStats'));

		if (userStats) {
			const updatedStats = userStats.map((test) =>
				test.testName === testName ? { ...test, status: 'not-started' } : test
			);
			localStorage.setItem('userStats', JSON.stringify(updatedStats));
			setTestStatus();
		}
		onClick();
	};

	return (
		<>
			<div className='method-card bg-gray-400 min-h-[400px] flex flex-col rounded-2xl mx-4 items-center mb-5 mt-5'>
				<img src={imgSrc} alt='MethodImg' className='h-[280px] w-[60%] mt-5 rounded-2xl' />
				<div className='flex flex-col items-center mb-6 mt-3 flex-grow w-full px-4'>
					<p className='text-xl font-medium'>{title}</p>
					{testStatus === 'done' && (
						<>
							<div className='flex'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='size-5'
									viewBox='0 0 64 64'
									fill='green'
								>
									<path d='M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z'></path>
								</svg>

								<p className='text-sm'>Пройдено</p>
							</div>
						</>
					)}
					<p className='px-3 pt-3 pb-6'>{description}</p>

					{testStatus === 'done' && (
						<Button onClick={replayTest} className='mt-[auto]'>
							Пройти снова
						</Button>
					)}
					{testStatus === 'not-started' && (
						<Button onClick={startTest} className='mt-[auto]'>
							Пройти тестирование
						</Button>
					)}
				</div>
			</div>
			<Notification notifications={notifications} />
		</>
	);
}
