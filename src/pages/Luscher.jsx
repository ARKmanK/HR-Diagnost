import { useState, useEffect } from 'react';

import Header from '../components/UI/Header';
import TestInfoBox from '../components/TestInfoBox';
import QuestionSection from '../components/Question/QuestionSection';
import Button from '../components/UI/Button/ButtonTypeB/Button';
import { questions as luscherQuestions } from '../data/LuscherTest/questionsList';

export default function Holland() {
	const [isTestStarted, setIsTestStarted] = useState(false);

	return (
		<div className="bg-gray-300 max-w-[1200px] mx-auto">
			<Header />
			<TestInfoBox boxType={'luscherTest'} />

			{isTestStarted && <QuestionSection testName={'luscherTest'} questions={luscherQuestions} />}

			{!isTestStarted && (
				<div className="ml-4 pb-3">
					<Button
						onClick={() => {
							setIsTestStarted(true);
						}}
					>
						Пройти тест
					</Button>
				</div>
			)}
		</div>
	);
}
