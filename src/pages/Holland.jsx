import { useState, useEffect } from "react";

import Header from "../components/UI/Header";
import InfoBox from "../components/InfoBox";
import QuestionSection from "../components/Question/QuestionSection";
import Button from "../components/UI/Button/ButtonTypeB/Button";

export default function MyApp() {
  const [isTestStarted, setIsTestStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log("isTestStarted:", isTestStarted);
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
        <div className="ml-4">
          <Button
            onClick={() => {
              setIsTestStarted(true);
            }}
          >
            Пройти тест
          </Button>
        </div>
      )}
    </div>
  );
}
