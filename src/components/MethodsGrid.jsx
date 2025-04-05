import React from 'react';
import { useNavigate } from 'react-router-dom';

import MethodCard from './MethodCard';
import { testsList } from '../data/testsList';

export default function MethodsGrid() {
	const navigate = useNavigate();

	const handleClick = (path) => {
		navigate(`${path}`);
	};

	return (
		<>
			<div className='grid grid-cols-3 gap-4 mt-10'>
				{testsList.map((test, index) => (
					<MethodCard
						key={index}
						imgSrc={test.imgSrc}
						title={test.title}
						description={test.description}
						onClick={() => handleClick(test.path)}
					/>
				))}
			</div>
		</>
	);
}
