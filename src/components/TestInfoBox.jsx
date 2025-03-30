import {
	personalityTypes,
	testInfo as HollandTestInfo,
} from '../data/HollandTest/personalityTypes';
import { testInfo as CattellTestInfo } from '../data/CattellTest/testInfo';
import { testInfo as LuscherTestInfo } from '../data/LuscherTest/testInfo';

export default function TestInfoBox({ boxType }) {
	return (
		<div className="md:mt-5 mx-3 mt-4">
			{boxType === 'hollandTest' && (
				<>
					<h1 className="text-lg md:text-2xl font-medium md:font-medium text-center">
						{HollandTestInfo.title}
					</h1>
					<p className="text-md pl-3 md:text-lg mt-4">{HollandTestInfo.description}</p>
					<ul className="mt-3 ml-3">
						{personalityTypes.map((value, index) => (
							<li key={index} className="text-md">
								{value}
							</li>
						))}
					</ul>
				</>
			)}

			{boxType === 'cattellTest' && (
				<>
					<h1 className="text-lg md:text-2xl font-medium md:font-medium text-center">
						{CattellTestInfo.title}
					</h1>
					<p className="text-md pl-3 md:text-lg mt-4">{CattellTestInfo.description}</p>
				</>
			)}

			{boxType === 'luscherTest' && (
				<>
					<h1 className="text-lg md:text-2xl font-medium md:font-medium text-center">
						{LuscherTestInfo.title}
					</h1>
					<p className="text-md pl-3 md:text-lg mt-4">{LuscherTestInfo.description}</p>
				</>
			)}
		</div>
	);
}
