import React, { useState } from 'react';
import TestResults from '@components/Question/TestResults.jsx';
import { saveTestResultsInStorage } from '@services/data.js';

export default function QuestionBoxTypeCattell({
	question,
	options,
	onClick,
	testName,
	testLength,
}) {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [answerList, setAnswerList] = useState([]);
	const [number, setNumber] = useState(1);

	const addAnswer = (index) => {
		setAnswerList((answerList) => {
			const newAnswerList = [...answerList];
			newAnswerList.push(`${questionIndex + 1}${index === 1 ? 'b' : 'a'}`);

			if (questionIndex + 1 === testLength) {
				saveTestResultsInStorage({
					testTitle: 'Тест Кеттелла',
					testName: 'cattellTest',
					testAddress: '/cattell',
					answers: newAnswerList,
					status: 'done',
					dateCompleted: new Date().toISOString(),
				});
			}
			return newAnswerList;
		});
	};

	const handleNextQuestion = (index) => {
		setNumber(number + 1);
		addAnswer(index);
		setQuestionIndex(questionIndex + 1);
		onClick();
	};

	return (
		<>
			{questionIndex < testLength ? (
				<div className='w-full max-w-[600px] mx-auto border-2 border-white rounded-2xl p-6 flex flex-col min-h-[300px] max-h-[450px]'>
					<p className='text-white font-medium text-lg mb-2'>Вопрос {number}</p>
					<h3 className='text-lg font-bold text-white mb-6 whitespace-normal break-words'>
						{question}
					</h3>
					<div className='mt-auto pt-4'>
						<div className='space-y-3 w-full'>
							{options.map((option, index) => (
								<button
									key={index}
									onClick={() => handleNextQuestion(index)}
									className='font-medium w-full max-w-[320px] mx-auto border-2 border-white rounded-xl cursor-pointer py-3 px-4 hover:bg-blue-900 flex items-center justify-center text-white text-lg'
								>
									{option}
								</button>
							))}
						</div>
					</div>
				</div>
			) : (
				<TestResults testName={testName} />
			)}
		</>
	);
}
