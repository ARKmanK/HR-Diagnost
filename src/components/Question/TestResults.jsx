import React, { useEffect, useState } from 'react';
import {
	countScores,
	convertToSten,
	interpretResults,
	scoringKey,
	rawToSten,
} from '@data/CattellTest/countResult';

function getColorHex(colorName) {
	const colors = {
		yellow: '#FFFF00',
		blue: '#0000FF',
		green: '#00FF00',
		gray: '#808080',
		black: '#000000',
		red: '#FF0000',
		brown: '#A52A2A',
		'dark-red': '#8B0000',
	};
	return colors[colorName] || '#FFFFFF';
}

export default function TestResults({ testName }) {
	const [testResults, setTestResults] = useState(null);
	const [typeCounts, setTypeCounts] = useState({});
	const [stenScores, setStenScores] = useState(null);

	useEffect(() => {
		if (testName === 'luscherTest' || testName === 'hollandTest') {
			const storedResults = localStorage.getItem('userStats');
			if (storedResults) {
				const allTests = JSON.parse(storedResults);
				const currentTest = allTests.find((test) => test.testName === testName);

				if (currentTest) {
					if (testName === 'cattellTest') {
						const answers = currentTest.answers;
						const rawScores = countScores(answers, scoringKey);
						const stenResults = convertToSten(rawScores, rawToSten);
						setTestResults(rawScores);
						setStenScores(stenResults);
					} else if (testName === 'luscherTest') {
						setTestResults(currentTest.results);
					} else if (testName === 'hollandTest') {
						setTypeCounts(currentTest.results);
					}
				}
			}
		}
		if (testName === 'cattellTest') {
			const storedResults = localStorage.getItem('userStats');
			if (storedResults) {
				const allTests = JSON.parse(storedResults);
				const currentTest = allTests.find((test) => test.testName === testName);

				if (currentTest && currentTest.answers) {
					const answers = currentTest.answers;
					const rawScores = countScores(answers, scoringKey);
					const stenResults = convertToSten(rawScores, rawToSten);
					const interpretation = interpretResults(stenResults);

					setTestResults(rawScores);
					setStenScores(interpretation);
				}
			}
		}
	}, [testName]);

	const topThreeValues = Object.values(typeCounts)
		.sort((a, b) => b - a)
		.slice(0, 3);

	return (
		<>
			<section className='max-w-[960px] mx-auto bg-gray-500 px-5 pb-7 border rounded-[2%] z-15'>
				<div>
					{testName === 'hollandTest' && (
						<>
							<p className='pt-10 pb-8 text-text-lg md:text-2xl font-medium md:font-medium text-center mx-7'>
								Результаты теста Голланда
							</p>
							{Object.entries(typeCounts).map(([type, value]) => {
								const isTopThree = topThreeValues.includes(value);
								return (
									<p
										key={type}
										className={`text-lg ml-6 font-medium ${isTopThree ? 'text-blue-800' : ''}`}
									>
										{type} <span>{value}</span>
									</p>
								);
							})}
						</>
					)}

					{testName === 'cattellTest' && (
						<>
							<p className='py-8 text-text-lg md:text-2xl font-medium md:font-medium text-center'>
								Результаты теста Кеттелла
							</p>
							{testResults && (
								<div className='space-y-8'>
									<div className='bg-gray-700 p-6 rounded-lg'>
										<h2 className='text-2xl font-bold mb-4 text-white'>Основные показатели</h2>
										<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
											{stenScores &&
												['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O'].map(
													(factor) => (
														<div key={factor} className='p-4 bg-gray-800 rounded-lg text-white'>
															<p className='text-lg font-semibold'>
																Фактор {factor}: {stenScores[factor]?.score || 0}
															</p>
															<p className='text-sm mt-2'>
																{stenScores[factor]?.description || 'Нет данных'}
															</p>
														</div>
													)
												)}
										</div>
									</div>

									<div className='bg-gray-700 p-6 rounded-lg'>
										<h2 className='text-2xl font-bold mb-4 text-white'>
											Дополнительные показатели
										</h2>
										<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
											{stenScores &&
												['Q1', 'Q2', 'Q3', 'Q4', 'MD'].map((factor) => (
													<div key={factor} className='p-4 bg-gray-800 rounded-lg text-white'>
														<p className='text-lg font-semibold'>
															{factor === 'MD' ? 'Мотивация' : `Фактор ${factor}`}:{' '}
															{stenScores[factor]?.score || 0}
														</p>
														<p className='text-sm mt-2'>
															{stenScores[factor]?.description || 'Нет данных'}
														</p>
													</div>
												))}
										</div>
									</div>

									{Object.values(testResults).every((score) => score === 0) && (
										<div className='bg-yellow-900 p-4 rounded-lg text-white'>
											<p className='font-semibold'>Внимание!</p>
											<p>
												Все сырые оценки равны 0. Возможно, тест был пройден некорректно или ответы
												не были сохранены.
											</p>
										</div>
									)}
								</div>
							)}
						</>
					)}

					{testName === 'luscherTest' && testResults && (
						<div className='p-6 text-white'>
							<h2 className='text-2xl font-bold mb-6 text-center'>Результаты теста Люшера</h2>

							<div className='mb-8 p-4 bg-gray-700 rounded-lg'>
								<h3 className='text-xl font-semibold mb-2'>Общее состояние:</h3>
								<p
									className={`text-lg ${
										testResults.stressLevel > 5 ? 'text-yellow-400' : 'text-green-400'
									}`}
								>
									{testResults.emotionalState}
								</p>
								<div className='mt-2'>
									<p>Уровень энергии: {testResults.energyLevel}/10</p>
									<p>Уровень стресса: {testResults.stressLevel}/10</p>
								</div>
							</div>

							{testResults.stressFactors.length > 0 && (
								<div className='mb-8 p-4 bg-gray-700 rounded-lg'>
									<h3 className='text-xl font-semibold mb-2'>Факторы стресса:</h3>
									<ul className='list-disc pl-5'>
										{testResults.stressFactors.map((factor, index) => (
											<li key={index} className='mb-1'>
												{factor}
											</li>
										))}
									</ul>
								</div>
							)}

							<div className='mb-8 p-4 bg-gray-700 rounded-lg'>
								<h3 className='text-xl font-semibold mb-2'>Интерпретация выбора цветов:</h3>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									{testResults.colorInterpretations.map((item, index) => (
										<div key={index} className='flex items-center p-2 bg-gray-800 rounded'>
											<div
												className='w-8 h-8 mr-3 rounded-full border border-white'
												style={{ backgroundColor: getColorHex(item.color) }}
											></div>
											<div>
												<p className='font-medium'>
													{index + 1}-я позиция: {item.color}
												</p>
												<p className='text-sm'>{item.meaning}</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className='p-4 bg-blue-900 rounded-lg'>
								<h3 className='text-xl font-semibold mb-2'>Рекомендации:</h3>
								<ul className='list-disc pl-5'>
									{testResults.recommendations.map((rec, index) => (
										<li key={index} className='mb-1'>
											{rec}
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
