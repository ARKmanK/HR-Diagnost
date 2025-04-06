import React from 'react';
import { useState } from 'react';

import TestResults from '@/components/Question/TestResults.jsx';
import { questions } from '@data/LuscherTest/questionsList.js';
import countResult from '@data/LuscherTest/countResult.js';

export default function QuestionBoxTypeB() {
	const [list, setList] = useState([]);
	const [clickedColors, setClickedColors] = useState([]);

	const setSelectedColor = (color) => {
		setList((prevList) => {
			const newList = [...prevList, color];

			if (newList.length === Object.keys(questions).length) {
				countResult(newList);
				return newList;
			}
			return newList;
		});
	};

	const handleClick = (color) => {
		setSelectedColor(color);
		setClickedColors((prevClickedColors) => [...prevClickedColors, color]);
	};

	return (
		<>
			{list.length < Object.keys(questions).length ? (
				Object.entries(questions).map(([color, bgColor]) => {
					if (!clickedColors.includes(color)) {
						return (
							<button
								key={bgColor}
								onClick={() => handleClick(color)}
								className={`w-[80px] h-[80px] mx-3 border border-black rounded-md`}
								style={{ backgroundColor: bgColor }}
							>
								{' '}
							</button>
						);
					}
					return null;
				})
			) : (
				<TestResults testName={'luscherTest'} />
			)}
		</>
	);
}
