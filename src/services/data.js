const API = import.meta.env.VITE_SWAGGER_URL;

export const fetchUserData = async (token = null) => {
	/* try {
    const response = await fetch(`${API}/`, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: token,
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка получения response')
    }

    const data = await.response.json()
    return data
  } catch (error) {
    throw new Error('Ошибка получения данных', + error.message)
  } */
	return;
};

export const fetchUserStats = async (token = null) => {
	/* try {
    const response = await fetch(`${API}/`, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: token,
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка получения response')
    }

    const data = await.response.json()
    return data
  } catch (error) {
    throw new Error('Ошибка получения данных', + error.message)
  } */
	return;
};

export const saveTestResultsInStorage = async (testData) => {
	try {
		const currentStats = JSON.parse(localStorage.getItem('userStats')) || [];

		const testIndex = currentStats.findIndex((t) => t.testName === testData.testName);
		let updatedStats;
		if (testIndex >= 0) {
			updatedStats = [
				...currentStats.slice(0, testIndex),
				{ ...currentStats[testIndex], ...testData },
				...currentStats.slice(testIndex + 1),
			];
		} else {
			updatedStats = [...currentStats, testData];
		}

		localStorage.setItem('userStats', JSON.stringify(updatedStats));
		await sendUserStats(testData);
		return true;
	} catch (error) {
		console.error('Ошибка сохранения:', error);
		return false;
	}
};

export const sendUserStats = async (data) => {
	/* try {
		const response = await fetch(`${API}/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error('Ошибка при сохранении результатов');
		}

		return await response.json();
	} catch (error) {
		console.log('Ошибка: ', error);
		throw error;
	} */
	return;
};

export const initUserStats = async () => {
	if (!localStorage.getItem('userStats')) {
		const defaultUserStats = [
			{
				testTitle: 'Тест Голланда',
				testName: 'hollandTest',
				testAddress: '/holland',
				status: 'not-started',
			},
			{
				testTitle: 'Тест Кетелла',
				testName: 'cattellTest',
				testAddress: '/cattell',
				status: 'not-started',
			},
			{
				testTitle: 'Тест Люшера',
				testName: 'luscherTest',
				testAddress: '/luscher',
				status: 'not-started',
			},
		];

		localStorage.setItem('userStats', JSON.stringify(defaultUserStats));
		return;
	}
};

export const initUserData = async () => {
	if (!localStorage.getItem('userData')) {
		const defaultUserData = [
			{
				username: 'ARKman',
				emailVerified: false,
			},
		];

		localStorage.setItem('userData', JSON.stringify(defaultUserData));
	}
};
