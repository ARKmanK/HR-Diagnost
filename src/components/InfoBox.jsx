import { personalityTypes } from "../data/personalityTypesList";

export default function InfoBox({ boxType }) {
  return (
    <div className="md:mt-5 mx-3 mt-4 ">
      <h1 className="text-lg md:text-2xl font-medium md:font-medium text-center">
        Тест Д.Голланда по определению типа личности
      </h1>
      <p className="text-md pl-3 md:text-lg mt-4 ">
        Изучая индивидуальные особенности людей, психолог Голланд разработал
        методику для определения социальной направленности личности (социального
        характерологического типа), выделив шесть типов:
      </p>

      {boxType === "PersonalityTypes" && (
        <ul className="mt-3 ml-3">
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
