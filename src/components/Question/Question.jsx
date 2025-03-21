import { useState } from 'react';
import TestResults from './TestResults';
import countResult from '../../data/HollandTest/countResult';

export default function Question({ question, options, onClick, testName, testLength }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerList, setAnswerList] = useState([]);

  const addAnswer = (index) => {
    setAnswerList((answerList) => {
      const newAnswerList = [...answerList];
      {
        index ? newAnswerList.push(`${questionIndex + 1}b`) : newAnswerList.push(`${questionIndex + 1}a`);
      }
      if (questionIndex + 1 === testLength) {
        countResult(newAnswerList);
      }
      return newAnswerList;
    });
  };

  const handleNextQuestion = (index) => {
    addAnswer(index);
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
