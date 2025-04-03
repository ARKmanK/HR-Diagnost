import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from './UI/Notification/Notification';
import redbullLogo from '../img/RedBullRacing.svg';

import userStats from '../data/userStats.json';

export default function ProfileBox({ user, onLogout }) {
	const [notifications, setNotifications] = useState([]);
	const [username, setUsername] = useState(`testUsername`);
	const [verified, setVerified] = useState(true);

	const navigate = useNavigate();

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

	const handleClick = (mode, path) => {
		if (mode === 'continueTest') {
			navigate(`${path}`);
		} else {
			if (mode === 'startTest') {
				navigate(`${path}`);
			}
		}
		return;
	};

	return (
		<>
			<div className="flex flex-col bg-gray-700 mx-30 rounded-b-2xl">
				<div className="flex items-center py-2 px-4">
					<img src={redbullLogo} className="w-[130px] h-[60px]" alt="logo" />
					<h1 className="text-white font-semibold text-2xl ml-5">Личный кабинет: {username}</h1>
				</div>
				<div className="flex items-center border-2 border-y-yellow-600 border-x-transparent px-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#2593dd"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
						/>
					</svg>
					{verified && (
						<div className="p-3 w-full flex">
							<p className="font-semibold ml-3 text-lg">Электронная почта подтверждена</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="green"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6 mt-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
								/>
							</svg>
						</div>
					)}
					{!verified && (
						<div className="p-3 w-full flex">
							<p className="font-semibold ml-3 text-lg">Электронная почта не подтверждена</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="red"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6 mt-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
								/>
							</svg>
						</div>
					)}
				</div>
				<section className="border-4 border-yellow-600 rounded-2xl m-3">
					<div className="flex justify-center">
						<h2 className="text-xl text-white font-semibold my-4">Мои Тесты</h2>
					</div>
					<ul className="flex flex-col items-center">
						{userStats.map((test, index) => (
							<li
								key={index}
								className="border-2 border-yellow-600 rounded-2xl mb-3 p-3 min-w-[500px]"
							>
								<p className="font-semibold text-lg text-white ml-1">{test.testName}</p>
								<div>
									{test.status === 'done' && (
										<div className="flex flex-col">
											<div className="flex">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="green"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-7"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
													/>
												</svg>
												<p className="text-green-400 font-semibold text-lg">Завершено</p>
											</div>
											<div className="flex justify-center">
												<button
													onClick={() => handleClick('showResults')}
													className="border-2 border-black rounded-lg w-[45%] mt-3 py-1 px-2 text-md font-medium text-white cursor-pointer"
												>
													Просмотреть результат
												</button>
											</div>
										</div>
									)}
									{test.status === 'in-progress' && (
										<div className="flex flex-col">
											<div className="flex">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="orange"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="size-7"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
													/>
												</svg>
												<p className="text-yellow-500 font-semibold text-lg">В процессе</p>
											</div>
											<div className="flex justify-center">
												<button
													onClick={() => handleClick('continueTest', test.testAddress)}
													className="border-2 border-black rounded-lg w-[45%] mt-3 py-1 px-2 text-md font-medium text-white cursor-pointer"
												>
													Продолжить
												</button>
											</div>
										</div>
									)}
									{test.status === 'not-started' && (
										<div className="flex flex-col">
											<div className="flex">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="#60a5fa"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-7"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
													/>
												</svg>
												<p className="text-blue-400 font-semibold text-lg">Не начато</p>
											</div>
											<div className="flex justify-center">
												<button
													onClick={() => handleClick('startTest', test.testAddress)}
													className="border-2 border-black rounded-lg w-[45%] mt-3 py-1 px-2 text-md font-medium text-white cursor-pointer"
												>
													Начать тест
												</button>
											</div>
										</div>
									)}
								</div>
							</li>
						))}
					</ul>
				</section>
			</div>
			<Notification notifications={notifications} />
		</>
	);
}
