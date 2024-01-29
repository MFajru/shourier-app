import { TCardOption } from "@/pages/user/shipping/newShipping";
import { formatToRupiah } from "@/utils/formatter/formatToRupiah";
import React, { useEffect, useState } from "react";

interface TAdditionalCard {
  options: TCardOption[];
  handleAction: (selectedOption: TCardOption) => void;
}

const AdditionalCard = ({ options, handleAction }: TAdditionalCard) => {
  const [selectedCard, setSelectedCard] = useState<TCardOption>(
    {} as TCardOption
  );

  const handleOnClick = (option: TCardOption) => {
    if (option.eta === "" || selectedCard === option) {
      return;
    }
    setSelectedCard(option);
    handleAction(option);
  };

  return (
    <>
      {options.map((option, idx) => (
        <div
          key={idx}
          className={`flex ${
            option === selectedCard
              ? "bg-secondary"
              : option.variants === "category"
              ? option.eta && option.eta != "" && option.cost != 0
                ? "bg-white"
                : "opacity-40 bg-gray-300"
              : "bg-white"
          } rounded-2xl border border-solid border-secondary w-80 p-4 gap-3`}
          onClick={() => handleOnClick(option)}
        >
          <div
            className={`${
              option === selectedCard ? "bg-primary" : "bg-white"
            } w-4 h-4 rounded-full  mt-1 aspect-square border border-solid border-primary`}
          ></div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">
              {option.cardTitle != "" ? option.cardTitle : "Not supported"}
            </p>
            {option.variants === "category" && (
              <>
                <p>
                  ETA:{" "}
                  {option.eta != "" && option.eta != undefined
                    ? `${option.eta} Days`
                    : ""}
                </p>
                <p>
                  Cost: {option.cost != 0 ? formatToRupiah(option.cost) : ""}
                </p>
              </>
            )}
            {option.variants === "addOn" ? (
              option.cost != 0 ? (
                <p>Additional Cost: {formatToRupiah(option.cost)}</p>
              ) : (
                <p>Additional Cost: Rp 0,00</p>
              )
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default AdditionalCard;
