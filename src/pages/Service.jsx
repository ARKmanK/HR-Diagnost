import Header from '../components/UI/Header';
import VideoBackground from '../components/VideoBackground'; // Импортируйте новый компонент

export default function Service() {
  return (
    <div className='bg-gray-300 max-w-[1200px] mx-auto'>
      <Header />
      <VideoBackground>
        <h3 className='text-2xl font-medium text-white mb-3'>Наши услуги</h3>
        <p className='text-gray-200'>Мы предлагаем широкий спектр услуг для HR-специалистов и компаний:</p>
        <ul className='text-gray-200 mt-2 list-disc ml-4'>
          <li>Психодиагностика сотрудников</li>
          <li>Тестирование на профориентацию</li>
          <li>Оценка компетенций</li>
          <li>Анализ данных и формирование отчетов</li>
          <li>Индивидуальные консультации</li>
        </ul>
      </VideoBackground>
    </div>
  );
}
