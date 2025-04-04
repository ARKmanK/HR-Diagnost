const API = import.meta.env.VITE_SWAGGER_URL;
import userData from './userData.json';
import userStats from './userStats.json';

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
	return userData;
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
	return userStats;
};
