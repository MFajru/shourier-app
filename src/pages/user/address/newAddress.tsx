import AddressForm from "@/components/Form/AddressForm";
import { apiBaseUrl } from "@/config";
import useCityOptions from "@/hooks/useCityOptions";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import useProvinceOptions from "@/hooks/useProvinceOptions";
import { useUserStore } from "@/stores/userStore";
import { Address, DestinationAddress } from "@/types";
import { TCity, TProvince } from "@/types/api";
import { TNewAddressError } from "@/types/error";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import { generateAddressDetailId } from "@/utils/generator/generateAddressDetailId";

const NewAddress = () => {
  const userId = Cookies.get("userId");
  const router = useRouter();

  const [destAddressForm, setDestAddressForm] = useState<Address>({
    addressName: "",
    receiver: "",
    receiverPhone: "",
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
    receiver: false,
    receiverPhone: false,
    street: false,
    province: false,
    city: false,
  });

  const { provinceOptions, province } = useProvinceOptions();
  const { cityOptions, city } = useCityOptions(destAddressForm);

  const existingAddress = useCustomSWR<DestinationAddress>(
    userId ? `${apiBaseUrl}/destinationAddress/${parseInt(userId) - 1}` : null
  );

  const patchDestinationAddress = async (newArrAddress: Address[]) => {
    try {
      if (userId) {
        const response = await axios.patch(
          `${apiBaseUrl}/destinationAddress/${parseInt(userId) - 1}`,
          {
            address: newArrAddress,
          }
        );
        if (response.status != 200) {
          throw new Error(`Something bad happened, ${response.statusText}`);
        }
        toast.success("Add successfull");
        return response.data;
      }
    } catch (error) {
      toast.error("Failed to add data, server error");
      console.error(error);
    }
  };

  const handleSubmitAddress = async (e: FormEvent) => {
    e.preventDefault();
    if (isValidForm(destAddressForm, setIsFormError)) {
      if (existingAddress.data && userId) {
        const newAddress = existingAddress.data.address;
        newAddress.push({
          ...destAddressForm,
          id: generateAddressDetailId(
            userId,
            existingAddress.data.address.length
          ),
        });
        await patchDestinationAddress(newAddress);

        setTimeout(() => {
          router.back();
        }, 1000);
      }
    }
  };

  const handleOnChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    if (e.target.name === "province") {
      if (province.data) {
        const selectProvince = province.data.rajaongkir.results.find(
          (value: TProvince) => {
            return value.province === e.target.value;
          }
        );
        if (selectProvince) {
          setDestAddressForm((prevData) => {
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
          setDestAddressForm((prevData) => {
            return {
              ...prevData,
              [e.target.name]: selectCity.city_name,
              cityId: selectCity.city_id,
            };
          });
        }
      }
    } else {
      setDestAddressForm((prevData) => {
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

  useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" richColors />
      <div className="bg-primary w-full py-12 px-[5%] lg:px-[12%]">
        <h1 className="text-3xl font-semibold text-white">Add New Address</h1>
      </div>
      <div className="py-10 flex flex-col gap-8 px-[5%] lg:px-[12%]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmitAddress}>
          <AddressForm
            variants="destination"
            addressData={destAddressForm}
            isFormError={isFormError}
            handleOnChange={handleOnChange}
            provinceOptions={provinceOptions}
            cityOptions={cityOptions}
            router={router}
          />
        </form>
      </div>
    </div>
  );
};

export default NewAddress;
