import React from 'react';

export default function ProgressBar({ progressValue }) {
	return (
		<>
			<div className='flex justify-center mt-4'>
				<div className='max-w-[450px] w-full min-h-[25px] bg-gray-200 rounded-full dark:bg-gray-700 mb-4'>
					<div
						className='bg-blue-600 min-h-[25px] text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full '
						style={{ width: `${progressValue}%`, fontSize: '13px' }}
					>
						{progressValue}%
					</div>
				</div>
			</div>
		</>
	);
}
