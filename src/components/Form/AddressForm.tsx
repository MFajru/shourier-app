import React from "react";
import { InputField } from "@/components/Form/InputField";
import SelectField from "@/components/Form/SelectField";
import { Address } from "@/types";
import Button from "@/components/Button/Button";
import { TNewAddressError } from "@/types/error";
import { NextRouter } from "next/router";

type TAddressForm = {
  addressData: Address;
  handleOnChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  isFormError: TNewAddressError;
  provinceOptions: string[];
  cityOptions: string[];
  variants?: "origin" | "destination";
  router?: NextRouter;
};

const AddressForm = ({
  addressData,
  handleOnChange,
  isFormError,
  provinceOptions,
  cityOptions,
  variants = "origin",
  router,
}: TAddressForm) => {
  return (
    <>
      <InputField
        type="text"
        name="addressName"
        value={addressData.addressName}
        onChange={handleOnChange}
        label="Address Name"
        placeholder="ex: JNE Kuningan, Rumah Nenek"
        err={isFormError.addressName ? "Address must be filled" : ""}
      />
      {variants === "destination" && (
        <div className="flex flex-col md:flex-row md:gap-4">
          <InputField
            type="text"
            name="receiver"
            value={addressData.receiver!}
            onChange={handleOnChange}
            label="Receiver Name"
            placeholder="ex: Jojo"
            err={isFormError.receiver ? "Receiver name must be filled" : ""}
          />
          <InputField
            type="number"
            name="receiverPhone"
            value={addressData.receiverPhone!}
            onChange={handleOnChange}
            label="Receiver Phone Number"
            placeholder="ex: 081234567890"
            err={
              isFormError.receiverPhone
                ? "Receiver phone number must be filled"
                : ""
            }
          />
        </div>
      )}
      <InputField
        type="text"
        name="street"
        value={addressData.street}
        onChange={handleOnChange}
        label="Street"
        placeholder="ex: Jl. Ini nama Jalan No. 20, Kuningan, Setiabudi"
        err={isFormError.street ? "Street must be filled" : ""}
      />
      <div className="flex flex-col md:flex-row md:gap-4">
        <SelectField
          id="province"
          name="province"
          onChange={handleOnChange}
          options={provinceOptions}
          label="Province"
          value={addressData.province ? addressData.province : ""}
          err={isFormError.province ? "Province must be chosen" : ""}
        />
        <SelectField
          id="city"
          name="city"
          onChange={handleOnChange}
          options={cityOptions}
          label="City"
          value={addressData.city ? addressData.city : ""}
          disabled={addressData.provinceId ? false : true}
          err={isFormError.city ? "City must be chosen" : ""}
        />
      </div>
      <div className="mt-10 flex gap-4">
        <div className="w-40">
          <Button type="submit" variants="primary">
            Save
          </Button>
        </div>
        <div className="">
          <Button
            type="button"
            variants="borderedError"
            onClick={() => router?.back()}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
