const API = import.meta.env.SWAGGER_URL;

/**
 * Регистрация нового пользователя через Swagger API
 * @param {string} email - Email пользователя
 * @param {string} password - Пароль пользователя
 * @param {string} username - Имя пользователя
 * @returns {Promise<Object>} - Данные пользователя
 */

export const signUp = async (email, password, username) => {
	try {
		const response = await fetch(`${API}/Authentication/Register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				username,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Ошибка при регистрации');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Ошибка при регистрации: ' + error.message);
	}
};

/**
 * Вход пользователя
 * @param {string} email - Email пользователя
 * @param {string} password - Пароль пользователя
 * @returns {Promise<Object>} - Данные пользователя и токен
 */
export const signIn = async (email, password) => {
	try {
		const response = await fetch(`${API}/Authentication/Login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Ошибка при входе');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Ошибка при входе: ' + error.message);
	}
};

/**
 * Подтверждение email
 * @param {string} email - Email пользователя
 * @param {string} code - Код подтверждения
 * @returns {Promise<Object>} - Результат подтверждения
 */
export const confirmEmail = async (email, code) => {
	try {
		const response = await fetch(`${API}/Authentication/Confirm`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				code,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Ошибка при подтверждении email');
		}

		return await response.json();
	} catch (error) {
		throw new Error('Ошибка при подтверждении email: ' + error.message);
	}
};

/**
 * Восстановление пароля
 * @param {string} email - Email пользователя
 * @returns {Promise<Object>} - Результат запроса
 */
export const restorePassword = async (email) => {
	try {
		const response = await fetch(`${API}/Authentication/RestorePassword`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Ошибка при запросе восстановления пароля');
		}

		return await response.json();
	} catch (error) {
		throw new Error('Ошибка при запросе восстановления пароля: ' + error.message);
	}
};

/**
 * Проверка пользователя (заглушка)
 * @returns {Promise<boolean>} - Всегда возвращает true
 */
export const checkUser = async () => {
	// В реальной реализации здесь должна быть проверка токена и т.д.
	return false;
};

/**
 * Выход пользователя
 * @returns {Promise<void>}
 */
export const signOut = async () => {
	// В реальной реализации здесь должен быть вызов API для выхода
	// и очистка токена из localStorage
	return Promise.resolve();
};
