import React, { useEffect, useState } from 'react';

export default function TestResults({ testName }) {
	const [typeCounts, setTypeCounts] = useState({});

	useEffect(() => {
		const storedTypeCounts = localStorage.getItem('typeCounts');
		if (storedTypeCounts) {
			setTypeCounts(JSON.parse(storedTypeCounts));
		}
	}, []);
	const topThreeValues = Object.values(typeCounts)
		.sort((a, b) => b - a)
		.slice(0, 3);

	return (
		<>
			<section className='max-w-[960px] mx-auto bg-gray-500 px-15 pb-15 border rounded-[8%]'>
				<div>
					{testName === 'hollandTest' && (
						<>
							<p className='py-8 text-text-lg md:text-2xl font-medium md:font-medium text-center '>
								Результаты теста Голланда
							</p>
							{Object.entries(typeCounts).map(([type, value]) => {
								const isTopThree = topThreeValues.includes(value);
								return (
									<p
										key={type}
										className={`text-lg font-medium ${isTopThree ? 'text-blue-800' : ''}`}
									>
										{type} <span>{value}</span>
									</p>
								);
							})}
						</>
					)}

					{testName === 'cattellTest' && (
						<>
							<p className='py-8 text-text-lg md:text-2xl font-medium md:font-medium text-center '>
								Результаты теста Кетелла
							</p>
						</>
					)}

					{testName === 'luscherTest' && (
						<>
							<p className='py-8 text-text-lg md:text-2xl font-medium md:font-medium text-center '>
								Результаты теста Люшера
							</p>
						</>
					)}
				</div>
			</section>
		</>
	);
}
