/* import { countResult } from "../../data/HollandTest/countResult"; */

export default function TestResults({ testName }) {
  return (
    <section className="w-full">
      <div>
        {testName === "hollandTest" && (
          <>
            <p>Результаты теста Голланда</p>
            {Object.entries({
              /* countResult */
            }).map(([type, value]) => {
              return (
                <p key={type}>
                  {type} <span>{value}</span>
                </p>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
