import { useState } from 'react';
import { loginUser } from '../services/auth';

export default function LoginForm({ onSuccessfulLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert('Пожалуйста, введите корректный email.');
      return;
    }

    const user = await loginUser(email, password);
    if (user) {
      console.log('Вход разрешен:', user);
      onSuccessfulLogin(); // Вызов функции после успешного входа
    } else {
      alert('Пользователь не найден.');
    }
  };

  return (
    <div className='rounded-2xl flex flex-col'>
      <div className='m-3'>
        <div className='text-white'>
          <p className='text-2xl mb-2'>Вход в аккаунт</p>
          <p>Введите вашу почту ниже для входа</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col mt-3'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              className='p-2 m-3 border border-white rounded-xl text-white'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              className='p-2 m-3 border border-white rounded-xl text-white'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='submit'
              className='cursor-pointer p-2 m-3 border-2 border-white rounded-xl text-white text-lg'
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
