import { useState } from "react";
import Question from "./Question";
import { questions } from "../data/questionsList";

export default function QuestionBox() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < Object.keys(questions).length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = Object.keys(questions)[currentQuestionIndex];
  const currentOptions = questions[currentQuestion];

  return (
    <div className="min-h-[200px] w-full bg-blue-950 mt-10">
      <div className="py-10 flex justify-center">
        <Question
          question={currentQuestion}
          options={currentOptions}
          onClick={handleNextQuestion}
        />
      </div>
    </div>
  );
}
