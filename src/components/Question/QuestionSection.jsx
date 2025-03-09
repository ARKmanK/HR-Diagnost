import { useEffect, useState } from "react";
import Question from "./Question";
import { questions } from "../../data/questionsList";
import ProgressBar from "../ProgressBar";

export default function QuestionBox() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);

  const handleNextQuestion = () => {
    console.log(currentQuestionIndex);
    if (currentQuestionIndex < Object.keys(questions).length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === 41) {
      setProgressValue(100);
    } else {
      setProgressValue(
        Math.ceil((currentQuestionIndex / Object.keys(questions).length) * 100)
      );
    }
  }, [currentQuestionIndex]);

  const currentQuestion = Object.keys(questions)[currentQuestionIndex];
  const currentOptions = questions[currentQuestion];

  return (
    <div className="min-h-[200px] w-full bg-blue-950 mt-10">
      <div className="pt-7 flex justify-center">
        <Question
          question={currentQuestion}
          options={currentOptions}
          onClick={handleNextQuestion}
        />
      </div>
      <ProgressBar progressValue={progressValue} />
    </div>
  );
}
