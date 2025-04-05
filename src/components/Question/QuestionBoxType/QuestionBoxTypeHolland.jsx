import React from 'react';
import { useState } from 'react';
import TestResults from '../TestResults.jsx';
import countResult from '../../../data/HollandTest/countResult.js';
import { saveTestResultsInStorage } from '../../../services/data.js';

export default function QuestionBoxTypeA({ question, options, onClick, testName, testLength }) {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [answerList, setAnswerList] = useState([]);

	const addAnswer = (index) => {
		setAnswerList((answerList) => {
			const newAnswerList = [...answerList];
			{
				index
					? newAnswerList.push(`${questionIndex + 1}b`)
					: newAnswerList.push(`${questionIndex + 1}a`);
			}
			if (questionIndex + 1 === testLength) {
				//countResult(newAnswerList);
				const results = countResult(newAnswerList);

				console.log('Сохраняем результаты');
				saveTestResultsInStorage({
					testTitle: 'Тест Голланда',
					testName: 'hollandTest', // Должно точно соответствовать
					testAddress: '/holland',
					answers: newAnswerList,
					results,
					status: 'done',
					dateCompleted: new Date().toISOString(),
				}).then((success) => {
					if (success) {
						console.log('Результаты успешно сохранены в localStorage');
						const savedData = JSON.parse(localStorage.getItem('userStats'));
						console.log('Проверка:', savedData);
					}
				});
			}
			return newAnswerList;
		});
	};

	const handleNextQuestion = (index) => {
		addAnswer(index);
		setQuestionIndex(questionIndex + 1);
		onClick();
	};

	return (
		<>
			{questionIndex < testLength ? (
				<div className='min-w-[450px] border-2 border-white rounded-2xl p-4 max-h-[300px] flex flex-col'>
					<h3 className='text-xl font-bold text-white'>{question}</h3>
					<div className='pt-4 text-white text-xl font-medium flex-grow flex flex-col items-center overflow-auto'>
						{options.map((option, index) => (
							<button
								key={index}
								onClick={() => handleNextQuestion(index)}
								className='max-w-[250px] border-2 border-white rounded-xl cursor-pointer p-2 w-full my-3 hover:bg-blue-900 flex-shrink-0'
							>
								{option}
							</button>
						))}
					</div>
				</div>
			) : (
				<TestResults testName={testName} />
			)}
		</>
	);
}
