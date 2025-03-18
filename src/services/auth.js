import supabase from './supabaseClient';

// Регистрация пользователя
export const registerUser = async (email, username, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Ошибка при регистрации:', error);
    return null;
  }

  console.log('Пользователь зарегистрирован:', user);

  // Добавляем username в таблицу public.users
  const { data, error: profileError } = await supabase.from('users').insert([{ id: user.id, username }]);
  console.log('da');
  if (profileError) {
    console.error('Ошибка при добавлении username:', profileError);
    return null;
  }

  console.log('Username добавлен в таблицу users:', data);

  return user;
};

// Вход пользователя
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Ошибка при входе:', error);
    return null;
  }

  return data.user;
};

// Проверка, авторизован ли пользователь
export const isUserAuthenticated = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('Ошибка при проверке авторизации:', error);
    return false;
  }

  return !!user;
};

export const getCurrentUserUsername = async () => {
  const { user, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Ошибка при получении текущего пользователя:', error);
    return null;
  }

  // Получаем username из таблицы users
  const { data: profile, error: profileError } = await supabase
    .from('users')
    .select('username')
    .eq('id', user.id)
    .single();

  if (profileError) {
    console.error('Ошибка при получении username:', profileError);
    return null;
  }

  return { ...user, username: profile.username };
};

// Проверка, существует ли username
/* export const getCurrentUser = async () => {
  const { user, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Ошибка при получении текущего пользователя:', error);
    return null;
  }

  return user;
}; */
