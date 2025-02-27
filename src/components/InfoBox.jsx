import { personalityTypes } from "../data/personalityTypesList";

export default function InfoBox({ boxType }) {
  return (
    <div className="md:mt-9 px-3">
      <h1 className="text-2xl font-semi-bold">
        Тест Д.Голланда по определению типа личности
      </h1>
      <p className="text-lg mt-4">
        Изучая индивидуальные особенности людей, психолог Голланд разработал
        методику для определения социальной направленности личности (социального
        характерологического типа), выделив шесть типов:
      </p>

      {boxType === "PersonalityTypes" && (
        <ul className="mt-3">
          {personalityTypes.map((value, index) => {
            return (
              <li key={index} className="text-md">
                {value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
