import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TestResults from '@components/Question/TestResults';
import { checkEmailVerification } from '@services/auth.js';

export default function ProfileBox({ onSuccessfulLogout }) {
	const [username, setUsername] = useState(``);
	const [userStats, setUserStats] = useState([]);
	const [verified, setVerified] = useState(false);
	const [showTestResults, setShowTestResults] = useState(false);
	const [testName, setTestName] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData) {
			setUsername(userData[0].username);
			setVerified(userData[0].emailVerified);
		}
		const stats = JSON.parse(localStorage.getItem('userStats')) || [];
		setUserStats(stats);
	}, []);

	const handleClick = (mode, path = null, testName = '') => {
		if (mode === 'showResults') {
			setShowTestResults(true);
			setTestName(testName);
		} else if (mode === 'startTest') {
			navigate(path);
		} else if (mode === 'continueTest') {
			navigate(path);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('authToken');
		onSuccessfulLogout();
	};

	const checkVerification = () => {
		checkEmailVerification();
	};

	return (
		<>
			<div className='flex flex-col bg-gray-700 mx-30 rounded-b-2xl'>
				<div className='flex items-center py-2 px-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='white'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='size-10'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
						/>
					</svg>
					<h1 className='text-white font-semibold text-2xl ml-3'>Личный кабинет: {username}</h1>
				</div>
				<div className='flex items-center border-2 border-y-yellow-600 border-x-transparent px-3'>
					{verified && (
						<>
							<div className='p-3 w-full flex'>
								<p className='font-semibold ml-3 text-lg'>Электронная почта подтверждена</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='green'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='size-6 mt-1 ml-2'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
									/>
								</svg>
							</div>
						</>
					)}
					{!verified && (
						<>
							<div className='flex flex-col'>
								<div className='pt-3 w-full flex'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='#2593dd'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='size-8 ml-2'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
										/>
									</svg>
									<p className='font-semibold ml-3 text-lg'>Электронная почта не подтверждена</p>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='red'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='size-6 mt-1 ml-2'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
										/>
									</svg>
									<button
										onClick={checkVerification}
										className='mx-1 px-2 border-2 rounded-xl cursor-pointer'
									>
										Проверить
									</button>
								</div>
								<p className='ml-13 mb-2 font-medium '>Проверьте почту</p>
							</div>
						</>
					)}
				</div>
				<section className='border-4 border-yellow-600 rounded-2xl m-3 relative min-h-[500px]'>
					<div className='flex justify-center'>
						<h2 className='text-xl text-white font-semibold my-4'>Мои Тесты</h2>
					</div>
					<ul className='flex flex-col items-center'>
						{userStats.map((test, index) => (
							<li
								key={index}
								className='border-2 border-yellow-600 rounded-2xl mb-3 p-3 min-w-[500px]'
							>
								<p className='font-semibold text-lg text-white ml-1'>{test.testTitle}</p>
								<div>
									{test.status === 'done' && (
										<>
											<div className='flex flex-col'>
												<div className='flex'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='green'
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														className='size-7'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
														/>
													</svg>
													<p className='text-green-400 font-semibold text-lg'>Завершено</p>
												</div>
												<div className='flex justify-center'>
													<button
														onClick={() => handleClick('showResults', null, test.testName)}
														className='border-2 border-black rounded-lg w-[45%] mt-3 py-1 px-2 text-md font-medium text-white cursor-pointer'
													>
														Просмотреть результат
													</button>
												</div>
											</div>
										</>
									)}
									{test.status === 'in-progress' && (
										<>
											<div className='flex flex-col'>
												<div className='flex'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='orange'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='size-7'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
														/>
													</svg>
													<p className='text-yellow-500 font-semibold text-lg'>В процессе</p>
												</div>
												<div className='flex justify-center'>
													<button
														onClick={() => handleClick('continueTest', test.testAddress)}
														className='border-2 border-black rounded-lg w-[45%] mt-3 py-1 px-2 text-md font-medium text-white cursor-pointer'
													>
														Продолжить
													</button>
												</div>
											</div>
										</>
									)}
									{test.status === 'not-started' && (
										<>
											<div className='flex flex-col'>
												<div className='flex'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='#60a5fa'
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														className='size-7'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
														/>
													</svg>
													<p className='text-blue-400 font-semibold text-lg'>Не начато</p>
												</div>
												<div className='flex justify-center'>
													<button
														onClick={() => handleClick('startTest', test.testAddress)}
														className='border-2 border-black rounded-lg w-[45%] mt-3 py-1 px-2 text-md font-medium text-white cursor-pointer'
													>
														Начать тест
													</button>
												</div>
											</div>
										</>
									)}
								</div>
							</li>
						))}
					</ul>
					{showTestResults && (
						<>
							<div className='absolute inset-0 top-5'>
								<div className='flex justify-center'>
									<div className='flex flex-col items-end'>
										<TestResults testName={testName} />
										<button
											onClick={() => setShowTestResults(false)}
											className='absolute right cursor-pointer rounded-4xl mr-2 mt-2'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className='size-8'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</>
					)}
				</section>
				<div className='flex justify-start py-3'>
					<button
						onClick={handleLogout}
						className='border-2 border-black rounded-xl py-1 px-3 ml-5 bg-[#2e1b6d] cursor-pointer text-gray-100 font-medium hover:bg-[#2f294dfd] hover:-translate-y-1 transform transition-transform'
					>
						Выйти из аккаунта
					</button>
				</div>
			</div>
		</>
	);
}
