import Header from '../components/UI/Header';
import VideoBackground from '../components/VideoBackground';

export default function Login() {
  return (
    <div className='bg-gray-300 max-w-[1200px] mx-auto'>
      <Header />
      <VideoBackground>
        <h3 className='text-2xl font-medium text-white mb-3'>Личный кабинет</h3>
        <p className='text-gray-200'>Добро пожаловать, [Имя пользователя]!</p>
        <ul className='text-gray-200 mt-2 list-disc ml-4'>
          <li className='p-1'>
            <a href='/login'>Мои тесты</a>
          </li>
          <li className='p-1'>
            <a href='/login'>Результаты</a>
          </li>
          <li className='p-1'>
            <a href='/login'>Выйти</a>
          </li>
        </ul>
      </VideoBackground>
    </div>
  );
}
