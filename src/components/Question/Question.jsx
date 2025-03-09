import { useState } from "react";

export default function Question({ question, options, onClick }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleOptionChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedOption(value);
    // Отправить на выбранное значение на обработку
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
      onClick();
    }
    /* setSelectedOption(null); */
    /* onClick(); */
  };

  return (
    <div className="min-w-[450px] border-2 border-white rounded-2xl p-4">
      {questionIndex < 41 && (
        <>
          <h3 className="text-xl font-bold text-white">{question}</h3>
          <form className="pt-4 text-white text-lg font-medium">
            {options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  className="cursor-pointer"
                  type="radio"
                  id={`option-${index}`}
                  name="options"
                  value={index}
                  checked={selectedOption === index}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option-${index}`} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </form>
          {questionIndex < 41 && (
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-500 text-white py-2 rounded"
            >
              Следующий вопрос
            </button>
          )}
          {questionIndex === 41 && (
            <>
              <div></div>
              <button
                onClick={handleNextQuestion}
                className="mt-4 bg-blue-500 text-white py-2 rounded"
              >
                Завершить тест
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
