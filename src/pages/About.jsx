import React from 'react';

import Header from '@components/UI/Header';
import VideoBackground from '@components/VideoBackground';

export default function About() {
	return (
		<>
			<div className='bg-gray-300 max-w-[1200px] mx-auto'>
				<Header />
				<VideoBackground>
					<h3 className='text-2xl font-medium text-white mb-3'>О нас</h3>
					<p className='text-gray-200'>
						Мы — команда профессионалов, создающая инновационные решения для HR-специалистов.
					</p>
				</VideoBackground>
			</div>
		</>
	);
}
