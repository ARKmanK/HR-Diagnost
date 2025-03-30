import { useEffect, useState } from 'react';

export default function ProfileBox({ user, onLogout }) {
	return (
		<>
			<div>
				<h1>Профиль</h1>
				<button onClick={onLogout}>Выйти</button>
			</div>
		</>
	);
}
