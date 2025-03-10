import { useState } from "react";
import TestResults from "./TestResults";
import countResult from "../../data/HollandTest/countResult";

export default function Question({ question, options, onClick, testName }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerList, setAnswerList] = useState([]);

  const addAnswer = (index, option) => {
    setAnswerList((prevAnswerList) => {
      const newAnswerList = [...prevAnswerList];
      if (index) {
        newAnswerList.push(`${option}b`);
      } else {
        newAnswerList.push(`${option}a`);
      }
      console.log(newAnswerList); // Выводим обновленный список ответов
      return newAnswerList;
    });

    if (questionIndex >= 41) {
      countResult(answerList);
    }
  };

  const handleNextQuestion = (index, option) => {
    addAnswer(index, option);
    setQuestionIndex(questionIndex + 1);
    onClick();
  };

  return (
    <>
      {questionIndex < 42 ? (
        <div className="min-w-[450px] border-2 border-white rounded-2xl p-4 max-h-[300px] flex flex-col">
          <h3 className="text-xl font-bold text-white">{question}</h3>
          <div className="pt-4 text-white text-xl font-medium flex-grow flex flex-col items-center overflow-auto">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleNextQuestion(index, option)}
                className="max-w-[250px] border-2 border-white rounded-xl cursor-pointer p-2 w-full my-3 hover:bg-blue-900 flex-shrink-0"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <TestResults testName={testName} />
      )}
    </>
  );
}
