import React from 'react';

import Header from '../components/UI/Header';
import MethodsGrid from '../components/MethodsGrid';

export default function Methods() {
	return (
		<div className='bg-gray-300 max-w-[1200px] mx-auto'>
			<Header />
			<MethodsGrid />
		</div>
	);
}
