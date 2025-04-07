import React from 'react';

import Header from '@components/UI/Header';
import VideoBackground from '@components/VideoBackground';

export default function Pricing() {
	return (
		<>
			<div className='bg-gray-300 max-w-[1200px] mx-auto'>
				<Header />
				<VideoBackground>
					<h3 className='text-2xl font-medium text-white mb-3'>Тарифы</h3>
					<p className='text-gray-200'>Выберите подходящий тарифный план:</p>
					<ul className='text-gray-200 mt-2 list-disc ml-4'>
						<li className='p-1'>
							<span className='font-semibold text-white'>Бесплатный: </span>
							<a href='/pricing'>Как правильно проводить психодиагностику</a>
						</li>
						<li className='p-1'>
							<span className='font-semibold text-white'>Базовый: </span>
							<a href='/pricing'>Полный доступ к тестам и отчетам.</a>
						</li>
						<li className='p-1'>
							<span className='font-semibold text-white'>Профессиональный: </span>
							<a href='/pricing'>Расширенные функции и аналитика.</a>
						</li>
					</ul>
				</VideoBackground>
			</div>
		</>
	);
}
