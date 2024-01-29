import React from "react";
import { InputField } from "./InputField";
import Button from "../Button/Button";
import { Promo } from "@/types";
import { TNewPromoError } from "@/types/error";
import { NextRouter } from "next/router";

type TPromoForm = {
  promoData: Partial<Promo>;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFormError: TNewPromoError;
  router: NextRouter;
};

const PromoForm = ({
  promoData,
  handleOnChange,
  isFormError,
  router,
}: TPromoForm) => {
  return (
    <>
      <div className="flex gap-4">
        <InputField
          type="text"
          name="promoCode"
          value={promoData.promoCode !== "" ? promoData.promoCode! : ""}
          onChange={handleOnChange}
          label="Promo Code"
          placeholder="ex: MANTAPDISKON"
          err={isFormError.promoCode ? "Promo code must be filled" : ""}
        />
        <InputField
          type="number"
          name="discount"
          value={promoData.discount !== "" ? promoData.discount! : ""}
          onChange={handleOnChange}
          label="Discount (%)"
          placeholder="ex: 20"
          err={
            isFormError.discount
              ? "Discount must be filled"
              : parseInt(promoData.discount!) <= 0
              ? "Discount can't be 0 (zero)"
              : parseInt(promoData.discount!) > 100
              ? "Max discount is 100"
              : ""
          }
        />
      </div>
      <div className="flex gap-4">
        <InputField
          type="number"
          name="quota"
          value={promoData.quota !== "" ? promoData.quota! : ""}
          onChange={handleOnChange}
          label="Quota"
          placeholder="ex: 10"
          err={
            isFormError.quota
              ? "Quota must be filled"
              : parseInt(promoData.quota!) <= 0
              ? "Quota can't be 0 (zero)"
              : ""
          }
        />
        <InputField
          type="date"
          name="expiryDate"
          value={promoData.expiryDate!}
          onChange={handleOnChange}
          label="Expiration Date"
          err={isFormError.expiryDate ? "Expiration date must be filled" : ""}
        />
      </div>
      <div className="mt-10 flex gap-4">
        <div>
          <Button type="submit" variants="primary">
            Save
          </Button>
        </div>
        <div className="">
          <Button type="button" variants="" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default PromoForm;
