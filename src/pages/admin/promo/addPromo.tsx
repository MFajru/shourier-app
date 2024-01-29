import Button from "@/components/Button/Button";
import { InputField } from "@/components/Form/InputField";
import PromoForm from "@/components/Form/PromoForm";
import AdminLayout from "@/components/Layout/AdminLayout";
import { apiBaseUrl } from "@/config";
import { Promo } from "@/types";
import { TNewPromoError } from "@/types/error";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { Toaster, toast } from "sonner";

const AddPromo = () => {
  const router = useRouter();
  const [promoData, setPromoData] = useState<Partial<Promo>>({
    promoCode: "",
    discount: "",
    quota: "",
    expiryDate: "",
  });
  const [isFormError, setIsFormError] = useState<TNewPromoError>({
    promoCode: false,
    discount: false,
    quota: false,
    expiryDate: false,
  });

  const postPromo = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}/promos`, {
        promoCode: promoData.promoCode,
        discount: parseInt(promoData.discount!),
        quota: parseInt(promoData.quota!),
        used: 0,
        expiryDate: moment(promoData.expiryDate!).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      if (response.status != 201) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Add promo successfull");
      return response.data;
    } catch (error) {
      toast.error("Something wrong happened, failed to add promo");
      console.error(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    setIsFormError((prevData) => {
      return {
        ...prevData,
        [e.target.name]: false,
      };
    });

    if (value === " ") {
      value = "";
    }

    if (e.target.name === "promoCode") {
      value = e.target.value.replace(" ", "").toUpperCase();
    }

    setPromoData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: value,
      };
    });
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      isValidForm(promoData, setIsFormError) &&
      parseInt(promoData.discount!) > 0 &&
      parseInt(promoData.discount!) < 100 &&
      parseInt(promoData.quota!) > 0
    ) {
      await postPromo();
      setTimeout(() => {
        router.back();
      }, 1000);
    }
  };

  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <h1 className="uppercase font-semibold text-2xl text-black pt-14">
        Add New Promo
      </h1>
      <form className="mt-5" onSubmit={handleOnSubmit}>
        <PromoForm
          promoData={promoData}
          handleOnChange={handleOnChange}
          isFormError={isFormError}
          router={router}
        />
      </form>
    </AdminLayout>
  );
};

export default AddPromo;
