import React from 'react';
import { useEffect, useState } from 'react';

import QuestionBoxTypeHolland from '@components/Question/QuestionBoxType/QuestionBoxTypeHolland';
import QuestionBoxTypeCattell from '@components/Question/QuestionBoxType/QuestionBoxTypeCattell';
import QuestionBoxTypeLuscher from '@components/Question/QuestionBoxType/QuestionBoxTypeLuscher';
import ProgressBar from '@components/ProgressBar';

export default function QuestionSection({ testName, questions }) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [progressValue, setProgressValue] = useState(0);

	const handleNextQuestion = () => {
		if (currentQuestionIndex < Object.keys(questions).length) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	useEffect(() => {
		if (currentQuestionIndex === Object.keys(questions).length) {
			setProgressValue(100);
		} else {
			setProgressValue(Math.ceil((currentQuestionIndex / Object.keys(questions).length) * 100));
		}
	}, [currentQuestionIndex, questions]);

	const currentQuestion = Object.keys(questions)[currentQuestionIndex];
	const currentOptions = questions[currentQuestion];

	return (
		<>
			<div className='min-h-[300px] md:min-h-[430px] w-full bg-blue-950 mt-10 '>
				<div className='pt-7 md:pt-10 flex justify-center'>
					{testName === 'hollandTest' && (
						<>
							<QuestionBoxTypeHolland
								question={currentQuestion}
								options={currentOptions}
								onClick={handleNextQuestion}
								testName={testName}
								testLength={Object.keys(questions).length}
							/>
						</>
					)}

					{testName === 'cattellTest' && (
						<>
							<QuestionBoxTypeCattell
								question={currentQuestion}
								options={currentOptions}
								onClick={handleNextQuestion}
								testName={testName}
								testLength={Object.keys(questions).length}
							/>
						</>
					)}

					{testName === 'luscherTest' && <QuestionBoxTypeLuscher />}
				</div>
				{testName != 'luscherTest' && currentQuestionIndex < Object.keys(questions).length && (
					<>
						<ProgressBar progressValue={progressValue} />
					</>
				)}
			</div>
		</>
	);
}
