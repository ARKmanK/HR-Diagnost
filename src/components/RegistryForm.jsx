import { useState } from 'react';
import { registerUser } from '../services/auth';
import { ArrowBigLeft } from 'lucide-react';

export default function RegistryForm({ onGoBack }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isValidPassword = (password) => {
    return password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert('Пожалуйста, введите корректный email.');
      return;
    }

    if (!isValidPassword(password)) {
      alert('Пароль должен содержать минимум 6 символов, включая хотя бы одну букву и одну цифру.');
      return;
    }

    const user = await registerUser(email, username, password);
    if (user) {
      console.log('Пользователь зарегистрирован:', user);
    }
  };

  return (
    <div className='rounded-2xl flex flex-col'>
      <div className='m-3'>
        <div className='text-white'>
          <p className='text-2xl mb-2'>Создать аккаунт</p>
          <p>Введите вашу почту ниже для создания аккаунта</p>
        </div>
        <div className=''>
          <form onSubmit={handleSubmit} className='flex flex-col mt-3'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              className='p-2 m-3 border border-white rounded-xl text-white'
              onChange={(e) => setUsername(e.target.value)}
            />
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
              className='cursor-pointer p-2 m-3 border border-white rounded-xl text-white'
            >
              Register
            </button>
          </form>
          <div className='mt-3'>
            <button
              className='cursor-pointer flex border border-white rounded-xl py-1 px-2 text-white'
              onClick={onGoBack}
            >
              <ArrowBigLeft size={22} className='text-white' />
              Вернуться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
