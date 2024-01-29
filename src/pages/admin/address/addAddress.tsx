import AddressForm from "@/components/Form/AddressForm";
import AdminLayout from "@/components/Layout/AdminLayout";
import { apiBaseUrl } from "@/config";
import useCityOptions from "@/hooks/useCityOptions";
import useProvinceOptions from "@/hooks/useProvinceOptions";
import { Address } from "@/types";
import { TCity, TProvince } from "@/types/api";
import { TNewAddressError } from "@/types/error";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { Toaster, toast } from "sonner";

const AddAddress = () => {
  const router = useRouter();
  const [originAddressData, setOriginAddressData] = useState<Address>({
    addressName: "",
    city: "",
    cityId: "",
    province: "",
    provinceId: "",
    street: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  const [isFormError, setIsFormError] = useState<TNewAddressError>({
    addressName: false,
    street: false,
    province: false,
    city: false,
  });

  const { provinceOptions, province } = useProvinceOptions();
  const { cityOptions, city } = useCityOptions(originAddressData);

  const postOriginAddress = async () => {
    try {
      const response = await axios.post(
        `${apiBaseUrl}/originAddress`,
        originAddressData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status != 201) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Add successfull");
      return response.data;
    } catch (error) {
      toast.error("Failed to add data, server error");
      console.error(error);
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    if (e.target.name === "province") {
      if (province.data) {
        const selectProvince = province.data.rajaongkir.results.find(
          (value: TProvince) => {
            return value.province === e.target.value;
          }
        );
        if (selectProvince) {
          setOriginAddressData((prevData) => {
            return {
              ...prevData,
              [e.target.name]: selectProvince.province,
              provinceId: selectProvince.province_id,
            };
          });
        }
      }
    } else if (e.target.name === "city") {
      if (city.data && city.data.rajaongkir.results.length != 0) {
        const selectCity = city.data.rajaongkir.results.find((value: TCity) => {
          return value.city_name === e.target.value;
        });
        if (selectCity) {
          setOriginAddressData((prevData) => {
            return {
              ...prevData,
              [e.target.name]: selectCity.city_name,
              cityId: selectCity.city_id,
            };
          });
        }
      }
    } else {
      setOriginAddressData((prevData) => {
        return {
          ...prevData,
          [e.target.name]: e.target.value,
        };
      });
    }
    setIsFormError((prevData) => {
      return {
        ...prevData,
        [e.target.name]: false,
      };
    });
  };

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (isValidForm(originAddressData, setIsFormError)) {
      await postOriginAddress();
      setTimeout(() => {
        router.back();
      }, 1000);
    }
  };

  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <h1 className="uppercase font-semibold text-2xl text-black pt-14">
        Add New Address
      </h1>
      <form className="mt-5" onSubmit={onSubmitForm}>
        <AddressForm
          addressData={originAddressData}
          isFormError={isFormError}
          handleOnChange={handleOnChange}
          provinceOptions={provinceOptions}
          cityOptions={cityOptions}
          router={router}
        />
      </form>
    </AdminLayout>
  );
};

export default AddAddress;
