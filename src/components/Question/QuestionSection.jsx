import { useEffect, useState } from 'react';
import Question from './Question';
import ProgressBar from '../ProgressBar';

export default function QuestionSection({ testName, questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);

  const handleNextQuestion = () => {
    //console.log(currentQuestionIndex);
    if (currentQuestionIndex < Object.keys(questions).length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === 42) {
      setProgressValue(100);
    } else {
      setProgressValue(Math.ceil((currentQuestionIndex / Object.keys(questions).length) * 100));
    }
  }, [currentQuestionIndex, questions]);

  const currentQuestion = Object.keys(questions)[currentQuestionIndex];
  const currentOptions = questions[currentQuestion];

  return (
    <div className="min-h-[300px] md:min-h-[400px] w-full bg-blue-950 mt-10">
      <div className="pt-7 md:pt-10 flex justify-center">
        {testName === 'hollandTest' && (
          <Question
            question={currentQuestion}
            options={currentOptions}
            onClick={handleNextQuestion}
            testName={testName}
            testLength={Object.keys(questions).length}
          />
        )}
      </div>
      {currentQuestionIndex < 42 && <ProgressBar progressValue={progressValue} />}
    </div>
  );
}
