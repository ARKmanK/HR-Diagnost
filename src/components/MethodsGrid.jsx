import Button from './UI/Button/ButtonTypeA/Button';
import { useNavigate } from 'react-router-dom';
import Holland from '../img/Holland.png';

export default function MethodsGrid() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('../holland');
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      <div className="bg-gray-400 min-h-[100px] flex flex-col rounded-2xl mx-4 items-center">
        <img src={Holland} className="h-[60%] w-[60%]" />
        <div className="flex flex-col items-center mb-3">
          <p className="text-xl font-medium pb-3">Тест Голланда</p>
          <p className="px-3 pt-3 pb-5">
            Lorem added some more text about this method. This simple test has 42 questions and returns your
            psycological role in team work
          </p>
          <Button onClick={handleClick}>Пройти тестирование</Button>
        </div>
      </div>
      <div className="bg-gray-400 min-h-[100px] flex flex-col rounded-2xl mx-4"></div>
      <div className="bg-gray-400 min-h-[100px] flex flex-col rounded-2xl mx-4"></div>
    </div>
  );
}
