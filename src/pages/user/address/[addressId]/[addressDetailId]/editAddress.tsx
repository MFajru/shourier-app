import AddressForm from "@/components/Form/AddressForm";
import { Address, DestinationAddress } from "@/types";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";
import useProvinceOptions from "@/hooks/useProvinceOptions";
import useCityOptions from "@/hooks/useCityOptions";
import { TNewAddressError } from "@/types/error";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { apiBaseUrl } from "@/config";
import axios from "axios";
import { TCity, TProvince } from "@/types/api";
import { useUserStore } from "@/stores/userStore";
import { isValidForm } from "@/utils/formValidation/isValidForm";

const EditDestinationAddress = () => {
  const router = useRouter();

  const [addressIdx, setAddressIdx] = useState<number | null>(null);
  const [destAddressForm, setDestAddressForm] = useState<Address>({
    addressName: "",
    receiver: "",
    receiverPhone: "",
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
    receiver: false,
    receiverPhone: false,
    street: false,
    province: false,
    city: false,
  });

  const { provinceOptions, province } = useProvinceOptions();
  const { cityOptions, city } = useCityOptions(destAddressForm);

  const existingDestAddress = useCustomSWR<DestinationAddress>(
    router.query.addressId
      ? `${apiBaseUrl}/destinationAddress/${router.query.addressId}`
      : null
  );

  const patchDestinationAddress = async (newArrAddress: Address[]) => {
    try {
      const response = await axios.patch(
        `${apiBaseUrl}/destinationAddress/${router.query.addressId}`,
        {
          address: newArrAddress,
        }
      );
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Save successfull");
      return response.data;
    } catch (error) {
      toast.error("Failed to add data, server error");
      console.error(error);
    }
  };

  const handleUpdateAddress = async (e: FormEvent) => {
    e.preventDefault();
    if (isValidForm(destAddressForm, setIsFormError)) {
      if (existingDestAddress.data && addressIdx != null) {
        const arrOfAddress = existingDestAddress.data.address;
        arrOfAddress[addressIdx] = destAddressForm;
        const res = await patchDestinationAddress(arrOfAddress);

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
    if (existingDestAddress.data) {
      let idx = 0;
      for (const address of existingDestAddress.data.address) {
        if (
          address.id &&
          address.id.toString() === router.query.addressDetailId
        ) {
          setDestAddressForm({
            ...address,
            updatedAt: new Date().toISOString(),
          });
          setAddressIdx(idx);
        }
        idx++;
      }
    }
  }, [existingDestAddress.data, router.query.addressDetailId]);

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
        <form className="flex flex-col gap-4" onSubmit={handleUpdateAddress}>
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

export default EditDestinationAddress;
