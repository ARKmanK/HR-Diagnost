import { useState, useEffect } from "react";

import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import QuestionSection from "./components/QuestionSection";
import Button from "./components/Button/Button";

export default function MyApp() {
  const [isTestStarted, setIsTestStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("isTestStarted:", isTestStarted);
    }, 2000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [isTestStarted]); // Зависимость от isTestStarted

  return (
    <div className="bg-gray-300 max-w-[1200px] mx-auto">
      <Header />
      <InfoBox boxType={"PersonalityTypes"}></InfoBox>

      {isTestStarted && <QuestionSection />}

      {!isTestStarted && (
        <Button
          onClick={() => {
            setIsTestStarted(true);
          }}
        >
          Пройти тест
        </Button>
      )}
    </div>
  );
}
