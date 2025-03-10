import {
  personalityTypes,
  testInfo,
} from "../data/HollandTest/personalityTypes";

export default function TestInfoBox({ boxType }) {
  return (
    <div className="md:mt-5 mx-3 mt-4">
      {boxType === "hollandTest" && (
        <>
          <h1 className="text-lg md:text-2xl font-medium md:font-medium text-center">
            {testInfo.title}
          </h1>
          <p className="text-md pl-3 md:text-lg mt-4">{testInfo.description}</p>
          <ul className="mt-3 ml-3">
            {personalityTypes.map((value, index) => (
              <li key={index} className="text-md">
                {value}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
