import AddressForm from "@/components/Form/AddressForm";
import AdminLayout from "@/components/Layout/AdminLayout";
import Spinner from "@/components/Loading/Spinner";
import { apiBaseUrl } from "@/config";
import useCityOptions from "@/hooks/useCityOptions";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import useProvinceOptions from "@/hooks/useProvinceOptions";
import { Address } from "@/types";
import { TCity, TProvince } from "@/types/api";
import { TNewAddressError } from "@/types/error";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

const EditAddress = () => {
  const router = useRouter();
  const [originAddressData, setOriginAddressData] = useState<Address>({
    addressName: "",
    city: "",
    cityId: "",
    province: "",
    provinceId: "",
    street: "",
    createdAt: "",
    updatedAt: "",
  });
  const [isFormError, setIsFormError] = useState<TNewAddressError>({
    addressName: false,
    street: false,
    province: false,
    city: false,
  });
  const { provinceOptions, province } = useProvinceOptions();
  const { cityOptions, city } = useCityOptions(originAddressData);
  const existingOriginAddress = useCustomSWR<Address>(
    router.query.addressId
      ? `${apiBaseUrl}/originAddress/${router.query.addressId}`
      : null
  );

  const patchOriginAddress = async () => {
    try {
      const response = await axios.patch(
        `${apiBaseUrl}/originAddress/${router.query.addressId}`,
        {
          addressName: originAddressData.addressName,
          city: originAddressData.city,
          cityId: originAddressData.cityId,
          province: originAddressData.province,
          provinceId: originAddressData.provinceId,
          street: originAddressData.street,
          updatedAt: new Date().toISOString(),
        }
      );
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Update successfull");
      return response.data;
    } catch (error) {
      toast.error("Update failed, there is something wrong");
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
      await patchOriginAddress();
      setTimeout(() => {
        router.back();
      }, 1000);
    }
  };

  useEffect(() => {
    if (existingOriginAddress.data) {
      setOriginAddressData(existingOriginAddress.data);
    }
  }, [existingOriginAddress.data]);

  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <h1 className="uppercase font-semibold text-2xl text-black pt-14">
        Edit Address
      </h1>
      {originAddressData &&
      originAddressData.city != "" &&
      originAddressData.province != "" &&
      provinceOptions.length != 0 &&
      cityOptions.length != 0 ? (
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
      ) : (
        <div className="mt-10">
          <Spinner />
        </div>
      )}
    </AdminLayout>
  );
};

export default EditAddress;
