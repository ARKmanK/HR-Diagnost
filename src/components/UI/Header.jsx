import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '@img/PSY_logo.png';
import { pages } from '@data/pages';

export default function Header() {
	return (
		<>
			<div className='bg-blue-950 md:min-h-90px md:flex md:p-4 md:items-center'>
				<img src={Logo} className='max-h-[70px] max-w-[250px] rounded-2xl' alt='Red Bull Racing' />
				<div
					id='navbar'
					className='md:ml-10 md:w-full md:flex md:justify-start text-white mt-7 md:mt-0 bg-indigo-950 md:bg-transparent rounded-3xl'
				>
					<ul className='md:flex md:p-1 md:gap-4 child:cursor-pointer items-center md:items-center text-md font-semibold px-7 w-full'>
						{pages &&
							Object.entries(pages).map(([pageName, domain]) => (
								<li key={domain} className='hover:text-gray-300 text-nowrap my-3'>
									<Link to={domain} className='p-2'>
										{pageName}
									</Link>
								</li>
							))}
					</ul>
				</div>
			</div>
		</>
	);
}
