import Button from "@/components/Button/Button";
import AdditionalCard from "@/components/Card/AdditionalCard";
import { InputField } from "@/components/Form/InputField";
import SelectField from "@/components/Form/SelectField";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { useUserStore } from "@/stores/userStore";
import { DestinationAddress, ShippingDetail, Address } from "@/types";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { generateShippingId } from "@/utils/generator/generateShippingId";
import { TCostResult } from "@/types/api";
import { useRouter } from "next/router";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import { useShippingStore } from "@/stores/shippingStore";

type TSelectedAddress = {
  originCityId: string;
  originFullAddress: string;
  destinationFullAddress: string;
  destinationCityId: string;
};

export type TCardOption = {
  variants: "category" | "addOn";
  cardTitle: string;
  eta?: string;
  cost: number;
};

type TSubCost = {
  category: number;
  addOn: number;
};

type TShippingError = {
  length: boolean;
  height: boolean;
  width: boolean;
  weight: boolean;
  receiver: boolean;
  receiverPhone: boolean;
  origin: boolean;
  destination: boolean;
  category: boolean;
  addOn: boolean;
};

const NewShipping = () => {
  const router = useRouter();
  const baseCatOptions: TCardOption[] = [
    {
      variants: "category",
      cardTitle: "OKE",
      eta: "",
      cost: 0,
    },
    {
      variants: "category",
      cardTitle: "REG",
      eta: "",
      cost: 0,
    },
    {
      variants: "category",
      cardTitle: "YES",
      eta: "",
      cost: 0,
    },
  ];
  const userId = Cookies.get("userId");
  const [addOnOptions] = useState<TCardOption[]>([
    {
      variants: "addOn",
      cardTitle: "No Add On",
      cost: 0,
    },
    {
      variants: "addOn",
      cardTitle: "Wooden Package",
      cost: 25000,
    },
    {
      variants: "addOn",
      cardTitle: "Bubble Wrap",
      cost: 10000,
    },
  ]);
  const [catOptions, setCatOptions] = useState<TCardOption[]>([
    {
      variants: "category",
      cardTitle: "OKE",
      eta: "",
      cost: 0,
    },
    {
      variants: "category",
      cardTitle: "REG",
      eta: "",
      cost: 0,
    },
    {
      variants: "category",
      cardTitle: "YES",
      eta: "",
      cost: 0,
    },
  ]);
  const [isError, setIsError] = useState<TShippingError>({
    length: false,
    width: false,
    height: false,
    weight: false,
    receiver: false,
    receiverPhone: false,
    origin: false,
    destination: false,
    category: false,
    addOn: false,
  });
  const [originOptions, setOriginOptions] = useState<string[]>([]);
  const [destinationOptions, setDestinationOptions] = useState<string[]>([]);
  const [subCost, setSubCost] = useState<TSubCost>({
    category: 0,
    addOn: 0,
  });
  const [selectedAddress, setSelectedAddress] = useState<TSelectedAddress>({
    originCityId: "",
    originFullAddress: "",
    destinationCityId: "",
    destinationFullAddress: "",
  });
  const [shippingForm, setShippingForm] = useState<ShippingDetail>({
    id: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    receiver: "",
    receiverPhone: "",
    origin: "",
    originFull: "",
    destination: "",
    destinationFull: "",
    costBefore: 0,
    costAfter: 0,
    status: "Pending",
    promoUsed: "",
    discountAmount: 0,
    category: "",
    categoryCost: 0,
    addOn: "",
    addOnCost: 0,
    review: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  const { savedShippingForm, saveShippingForm } = useShippingStore();

  const originAddress = useCustomSWR<Address[]>(`${apiBaseUrl}/originAddress`);
  const destinationAddress = useCustomSWR<DestinationAddress>(
    userId ? `${apiBaseUrl}/destinationAddress/${parseInt(userId) - 1}` : null
  );
  const cost = useCustomSWR<TCostResult>(
    selectedAddress.originCityId != "" &&
      selectedAddress.destinationCityId != "" &&
      shippingForm.weight != "" &&
      parseInt(shippingForm.weight) <= 30
      ? `/api/getCost?origin=${selectedAddress.originCityId}&destination=${
          selectedAddress.destinationCityId
        }&weight=${parseInt(shippingForm.weight) * 1000}`
      : null
  );

  const handleContinue = () => {
    const checkField = {
      length: shippingForm.length,
      width: shippingForm.width,
      height: shippingForm.height,
      weight: shippingForm.weight,
      receiver: shippingForm.receiver,
      receiverPhone: shippingForm.receiverPhone,
      origin: shippingForm.origin,
      destination: shippingForm.destination,
      category: shippingForm.category,
      addOn: shippingForm.addOn,
    };
    if (isValidForm(checkField, setIsError)) {
      setShippingForm((prevData) => {
        return {
          ...prevData,
          categoryCost: subCost.category,
          addOnCost: subCost.addOn,
          costBefore: subCost.addOn + subCost.category,
          costAfter: subCost.addOn + subCost.category,
        };
      });
      saveShippingForm({
        ...shippingForm,
        categoryCost: subCost.category,
        addOnCost: subCost.addOn,
        costBefore: subCost.addOn + subCost.category,
        costAfter: subCost.addOn + subCost.category,
      });
      router.push("/user/shipping/shippingPayment");
    }
  };

  const handleAction = (selectedOption: TCardOption) => {
    setIsError((prevData) => {
      return {
        ...prevData,
        [selectedOption.variants]: false,
      };
    });
    let value = "";
    if (selectedOption.variants === "category") {
      switch (selectedOption.cardTitle) {
        case "OKE":
          value = "1";
          break;
        case "REG":
          value = "2";
          break;
        case "YES":
          value = "3";
          break;
      }
    } else {
      switch (selectedOption.cardTitle) {
        case "No Add On":
          value = "0";
          break;
        case "Wooden Package":
          value = "1";
          break;
        case "Bubble Wrap":
          value = "2";
          break;
      }
    }
    setSubCost((prevData) => {
      return {
        ...prevData,
        [selectedOption.variants]: selectedOption.cost,
      };
    });
    setShippingForm((prevData) => {
      return {
        ...prevData,
        [selectedOption.variants]: value,
      };
    });
  };

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError((prevData) => {
      return {
        ...prevData,
        [e.target.name]: false,
      };
    });
    if (
      (e.target.name === "weight" && e.target.value.length > 2) ||
      e.target.value.length > 4
    ) {
      return;
    }
    if (
      e.target.name === "weight" ||
      e.target.name === "length" ||
      e.target.name === "height" ||
      e.target.name === "width"
    ) {
      saveShippingForm({ ...shippingForm, [e.target.name]: e.target.value });
    }
    setShippingForm((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });

    if (e.target.name === "weight" && e.target.value === "") {
      setCatOptions(baseCatOptions);
    }
  };

  const handleSelectAddress = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsError((prevData) => {
      return {
        ...prevData,
        [e.target.id]: false,
      };
    });
    setSelectedAddress((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });

    const selectedAddressName = e.target.value.split(", ");
    if (destinationAddress.data && e.target.name === "destinationFullAddress") {
      const selectedDestination = destinationAddress.data.address.find(
        (data) => data.addressName === selectedAddressName[0]
      );
      if (selectedDestination) {
        setSelectedAddress((prevData) => {
          return {
            ...prevData,
            destinationCityId: selectedDestination.cityId,
          };
        });

        setShippingForm((prevData) => {
          return {
            ...prevData,
            destination: selectedDestination.city,
            destinationFull: `${selectedDestination.street}, ${selectedDestination.city},
            ${selectedDestination.province}`,
            receiver: selectedDestination.receiver!,
            receiverPhone: selectedDestination.receiverPhone!,
          };
        });
      }
    }
    if (originAddress.data && e.target.name === "originFullAddress") {
      const selectedOrigin = originAddress.data.find(
        (data) => data.addressName === selectedAddressName[0]
      );
      if (selectedOrigin) {
        setSelectedAddress((prevData) => {
          return {
            ...prevData,
            originCityId: selectedOrigin.cityId,
          };
        });
        setShippingForm((prevData) => {
          return {
            ...prevData,
            origin: selectedOrigin.city,
            originFull: `${selectedOrigin.street}, ${selectedOrigin.city},  ${selectedOrigin.province}`,
          };
        });
      }
    }
  };

  useEffect(() => {
    if (savedShippingForm) {
      setShippingForm(savedShippingForm);
    }
  }, [savedShippingForm]);

  useEffect(() => {
    if (shippingForm.category != "") {
      setShippingForm((prevData) => {
        return {
          ...prevData,
          id: generateShippingId(shippingForm.category),
        };
      });
    }
  }, [shippingForm.category]);

  useEffect(() => {
    if (originAddress.data) {
      const stringArr = [];
      for (const origin of originAddress.data) {
        const tempString = `${origin.addressName}, ${origin.street}, ${origin.city}, ${origin.province}`;
        stringArr.push(tempString);
      }
      setOriginOptions(stringArr);
    }
  }, [originAddress.data]);

  useEffect(() => {
    if (destinationAddress.data) {
      const stringArr = [];
      for (const destination of destinationAddress.data.address) {
        const tempString = `${destination.addressName}, ${destination.street}, ${destination.city}, ${destination.province}`;
        stringArr.push(tempString);
      }
      setDestinationOptions(stringArr);
    }
  }, [destinationAddress.data]);

  useEffect(() => {
    if (cost.data) {
      const costsResult = cost.data.rajaongkir.results[0].costs;
      const newCatOptions: TCardOption[] = [
        {
          variants: "category",
          cardTitle: "OKE",
          eta: "",
          cost: 0,
        },
        {
          variants: "category",
          cardTitle: "REG",
          eta: "",
          cost: 0,
        },
        {
          variants: "category",
          cardTitle: "YES",
          eta: "",
          cost: 0,
        },
      ];
      for (const cost of costsResult) {
        if (cost.service === "OKE") {
          const updatedCatOption: TCardOption = {
            variants: "category",
            cardTitle: "OKE",
            cost: cost.cost[0].value,
            eta: cost.cost[0].etd,
          };
          newCatOptions[0] = updatedCatOption;
        } else if (cost.service === "REG" || cost.service === "CTC") {
          const updatedCatOption: TCardOption = {
            variants: "category",
            cardTitle: "REG",
            cost: cost.cost[0].value,
            eta: cost.cost[0].etd,
          };
          newCatOptions[1] = updatedCatOption;
        } else if (cost.service === "YES" || cost.service === "CTCYES") {
          const updatedCatOption: TCardOption = {
            variants: "category",
            cardTitle: "YES",
            cost: cost.cost[0].value,
            eta: cost.cost[0].etd,
          };
          newCatOptions[2] = updatedCatOption;
        }
      }
      setCatOptions(newCatOptions);
      if (cost.data.rajaongkir.results[0].costs.length === 0) {
        setCatOptions(newCatOptions);
      }
    }
  }, [cost.data]);

  useEffect(() => {
    cost.mutate();
  }, [cost, shippingForm]);

  useEffect(() => {
    useUserStore.persist.rehydrate();
    useShippingStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-primary w-full py-12 px-[5%] lg:px-[12%]">
        <h1 className="text-3xl font-semibold text-white">Add New Shipping</h1>
      </div>
      <div className="py-10 px-[5%] lg:px-[12%]">
        <form className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Package Details</h3>
            <div className="flex flex-col md:flex-row w-full justify-between md:gap-8">
              <InputField
                type="number"
                name="length"
                value={shippingForm.length}
                label="Length (CM)"
                placeholder="ex: 2"
                onChange={handleTextInput}
                err={isError.length ? "Length must be filled" : ""}
              />
              <InputField
                type="number"
                name="width"
                value={shippingForm.width}
                label="Width (CM)"
                placeholder="ex: 2"
                onChange={handleTextInput}
                err={isError.width ? "Width must be filled" : ""}
              />
              <InputField
                type="number"
                name="height"
                value={shippingForm.height}
                label="Height (CM)"
                placeholder="ex: 2"
                onChange={handleTextInput}
                err={isError.height ? "Height must be filled" : ""}
              />
              <InputField
                type="number"
                name="weight"
                value={shippingForm.weight}
                label="Weight (KG)"
                placeholder="ex: 2"
                onChange={handleTextInput}
                err={
                  isError.weight
                    ? "Weight must be filled"
                    : parseInt(shippingForm.weight) > 30
                    ? "Weight must be below 30 KG"
                    : ""
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-2xl">
              Address & Receiver Information
            </h3>
            <div className="flex flex-col lg:flex-row justify-between md:gap-4">
              <div className="w-full md:w-1/2">
                <SelectField
                  id="origin"
                  name="originFullAddress"
                  label="Origin Address"
                  options={originOptions}
                  value={
                    selectedAddress.originFullAddress != ""
                      ? selectedAddress.originFullAddress
                      : ""
                  }
                  onChange={handleSelectAddress}
                  err={isError.origin ? "Origin address must be filled" : ""}
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <div className="w-full">
                  <SelectField
                    id="destination"
                    name="destinationFullAddress"
                    label="Destination Address"
                    options={destinationOptions}
                    value={
                      selectedAddress.destinationFullAddress != ""
                        ? selectedAddress.destinationFullAddress
                        : ""
                    }
                    onChange={handleSelectAddress}
                    err={
                      isError.destination
                        ? "Destination address must be filled"
                        : ""
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    <span className="font-semibold">Receiver Name: </span>
                    {shippingForm.receiver}
                  </p>
                  <p>
                    <span className="font-semibold">Receiver Phone: </span>
                    {shippingForm.receiverPhone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-2xl">Additional Information</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <p className="text-sm">Shipping Category</p>
                <p className="text-red-500 text-xs">
                  {isError.category ? "Category must be chose" : ""}
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
                <AdditionalCard
                  options={catOptions}
                  handleAction={handleAction}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4">
                <p className="text-sm">Add On</p>
                <p className="text-red-500 text-xs">
                  {isError.addOn ? "Add On must be chose" : ""}
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
                <AdditionalCard
                  options={addOnOptions}
                  handleAction={handleAction}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-16">
            <Button variants="primary" onClick={handleContinue}>
              Continue to Payment
            </Button>
            <Button variants="borderedError" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewShipping;
