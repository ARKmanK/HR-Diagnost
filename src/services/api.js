/* import supabase from './supabaseClient';

// Получение всех пользователей
export const getUsers = async () => {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }

  return data;
};

// Добавление нового пользователя
export const addUser = async (username, password) => {
  const { data, error } = await supabase.from('users').insert([{ username, password_hash: password }]);

  if (error) {
    console.error('Ошибка при добавлении пользователя:', error);
    return null;
  }

  return data;
};
 */
