import Button from './UI/Button/ButtonTypeA/Button';

export default function MethodCard({ imgSrc, title, description, onClick }) {
  return (
    <>
      <div className="bg-gray-400 min-h-[100px] flex flex-col rounded-2xl mx-4 items-center mb-5">
              <img src={imgSrc} alt="MethodImg" className="h-[60%] w-[60%]" />
              <div className="flex flex-col items-center mb-6">
                <p className="text-xl font-medium pb-3">{title}</p>
                <p className="px-3 pt-3 pb-6">
                  {description}
                </p>
                <Button onClick={onClick}>Пройти тестирование</Button>
              </div>
            </div>
    </>
  )
}

