import PromoForm from "@/components/Form/PromoForm";
import AdminLayout from "@/components/Layout/AdminLayout";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { Promo } from "@/types";
import { TNewPromoError } from "@/types/error";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

const EditPromo = () => {
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

  const existPromos = useCustomSWR<Promo>(
    router.query.promoId ? `${apiBaseUrl}/promos/${router.query.promoId}` : null
  );

  const patchPromo = async () => {
    try {
      const response = await axios.patch(
        `${apiBaseUrl}/promos/${router.query.promoId}`,
        {
          promoCode: promoData.promoCode?.toUpperCase(),
          discount: parseInt(promoData.discount!),
          quota: parseInt(promoData.quota!),
          expiryDate: moment(promoData.expiryDate).toISOString(),
        }
      );
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Save successfull");
      return response.data;
    } catch (error) {
      toast.error("Something wrong happened, failed to save");
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
      await patchPromo();
      setTimeout(() => {
        router.back();
      }, 1000);
    }
  };

  useEffect(() => {
    if (existPromos.data) {
      setPromoData({
        promoCode: existPromos.data.promoCode,
        discount: existPromos.data.discount,
        quota: existPromos.data.quota,
        expiryDate: moment(existPromos.data.expiryDate).format("YYYY-MM-DD"),
      });
    }
  }, [existPromos.data]);

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

export default EditPromo;
