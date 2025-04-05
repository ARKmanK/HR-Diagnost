import React from 'react';

import Header from '../components/UI/Header';
import VideoBackground from '../components/VideoBackground';

export default function Blog() {
	return (
		<>
			<div className='bg-gray-300 max-w-[1200px] mx-auto'>
				<Header />
				<VideoBackground>
					<h3 className='text-2xl font-medium text-white mb-3'>Блог</h3>
					<p className='text-gray-200'>Читайте наши статьи и кейсы:</p>
					<ul className='text-gray-200 mt-2 list-disc ml-4'>
						<li className='p-1'>
							<a href='/blog'>Как правильно проводить психодиагностику</a>
						</li>
						<li className='p-1'>
							<a href='/blog'>5 способов повысить мотивацию сотрудников</a>
						</li>
						<li className='p-1'>
							<a href='/blog'>Кейс: Успешное внедрение HR-Diagnost в компании X</a>
						</li>
					</ul>
				</VideoBackground>
			</div>
		</>
	);
}
