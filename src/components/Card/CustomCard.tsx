import React, { ReactNode } from "react";
import { InputField } from "../Form/InputField";

type TCustomCard = {
  children: ReactNode;
  cardTitle: string;
};

const CustomCard = ({ children, cardTitle }: TCustomCard) => {
  return (
    <div className="bg-white rounded-3xl px-6 py-8 drop-shadow flex flex-col">
      <h3 className="font-semibold text-2xl">{cardTitle}</h3>
      {children}
    </div>
  );
};

export default CustomCard;
