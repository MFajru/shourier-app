import React from "react";

type TStepsIndicator = {
  step: number;
  stepsName: string[];
};

const StepsIndicator = ({ step, stepsName }: TStepsIndicator) => {
  return (
    <ul className="steps steps-vertical lg:steps-horizontal">
      {stepsName.map((name, idx) => (
        <li key={idx} className="step step-warning">
          {name}
        </li>
      ))}
    </ul>
  );
};

export default StepsIndicator;
