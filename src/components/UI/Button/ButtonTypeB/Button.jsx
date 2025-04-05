import React from 'react';
import './Button.scss';

export default function Button({ onClick, children, className = '' }) {
	function handleClick() {
		onClick();
	}

	return (
		<>
			<button onClick={handleClick} className={`raise mt-10 ${className}`}>
				{children}
			</button>
		</>
	);
}
