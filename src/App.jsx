import { useState } from "react";

import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import QuestionBox from "./components/QuestionBox";
import Button from "./components/Button/Button";

export default function MyApp() {
  const [isTestStarted, setIsTestStarted] = useState(false);

  return (
    <div className="bg-gray-300 max-w-[1200px] mx-auto">
      <Header />
      <InfoBox boxType={"PersonalityTypes"}></InfoBox>

      {isTestStarted && <QuestionBox />}

      {!isTestStarted && (
        <Button
          onClick={() => {
            console.log("Button clicked");
            setIsTestStarted(true);
          }}
        >
          Пройти тест
        </Button>
      )}
    </div>
  );
}
