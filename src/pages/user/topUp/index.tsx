import Button from "@/components/Button/Button";
import InputFieldWPrefix from "@/components/Form/InputFieldWPrefix";
import LineWithOr from "@/components/Line/LineWithOr";
import Spinner from "@/components/Loading/Spinner";
import { useUserStore } from "@/stores/userStore";
import { formatToRupiah } from "@/utils/formatter/formatToRupiah";
import React, { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { apiBaseUrl } from "@/config";
import { Toaster, toast } from "sonner";

type TValidAmount = {
  valid: boolean;
  errorMess: string;
};

const TopUp = () => {
  const topUpAmount = {
    min: 10000,
    max: 10000000,
  };
  const btnAmount = ["100000", "200000", "300000", "500000"];
  const userId = Cookies.get("userId");
  const { user, getUser } = useUserStore();
  const [inputAmount, setInputAmount] = useState<string>("");
  const [isValidAmount, setIsValidAmount] = useState<TValidAmount>({
    valid: true,
    errorMess: "",
  });

  const patchUpdateBalance = async (newBalance: number) => {
    try {
      const response = await axios.patch(`${apiBaseUrl}/users/${userId}`, {
        balance: newBalance,
      });
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Top up successfull");
      return response.data;
    } catch (error) {
      toast.error("Top up failed, something wrong with the server");
      console.error(error);
    }
  };

  const handleButtonAmount = (numCase: number) => {
    switch (numCase) {
      case 1:
        setInputAmount(btnAmount[0]);
        break;
      case 2:
        setInputAmount(btnAmount[0]);
        break;
      case 3:
        setInputAmount(btnAmount[2]);
        break;
      case 4:
        setInputAmount(btnAmount[3]);
        break;
    }
    setIsValidAmount({
      valid: true,
      errorMess: "",
    });
  };

  const handleTopUp = async () => {
    if (inputAmount === "") {
      setIsValidAmount({
        valid: false,
        errorMess: "Top up amount must be filled",
      });
      return;
    }
    if (
      parseInt(inputAmount) < topUpAmount.min ||
      parseInt(inputAmount) > topUpAmount.max
    ) {
      setIsValidAmount({
        valid: false,
        errorMess: "Amount must be in range of Rp 10.000,00 - Rp 10.000.000,00",
      });
      return;
    }

    if (user && user.balance !== undefined) {
      const newBalance = user.balance + parseInt(inputAmount);
      await patchUpdateBalance(newBalance);
      setInputAmount("");
      if (userId) {
        getUser(userId);
      }
    }
  };

  const handleOnInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setIsValidAmount({
      valid: true,
      errorMess: "",
    });
    if (e.target.value.length > 8) {
      return;
    }
    setInputAmount(value);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="flex flex-col">
        <div className="py-12 px-[5%] lg:px-[12%] flex flex-col gap-16">
          <h1 className="text-3xl font-semibold text-primary">
            Top Up Balance
          </h1>
          <div className="w-full flex flex-col items-center px-8 md:px-[20%]">
            <div className="bg-white border-2 border-solid border-primary drop-shadow-md rounded-3xl flex flex-col items-center w-full sm:w-[500px] px-8 py-6 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-[28px]">Your Balance</p>
                <p className="text-[28px] font-bold">
                  {user && user.balance && formatToRupiah(user.balance)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full">
              <Button
                variants="secondaryBig"
                onClick={() => handleButtonAmount(1)}
              >
                {formatToRupiah(100000)}
              </Button>
            </div>
            <div className="w-full">
              <Button
                variants="secondaryBig"
                onClick={() => handleButtonAmount(2)}
              >
                {formatToRupiah(200000)}
              </Button>
            </div>
            <div className="w-full">
              <Button
                variants="secondaryBig"
                onClick={() => handleButtonAmount(3)}
              >
                {formatToRupiah(300000)}
              </Button>
            </div>
            <div className="w-full">
              <Button
                variants="secondaryBig"
                onClick={() => handleButtonAmount(4)}
              >
                {formatToRupiah(500000)}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <LineWithOr />
          </div>
          <div className="flex flex-col w-full items-center gap-4">
            <h3 className="font-medium text-lg text-center">
              Input your desire top up amount
            </h3>
            <p className="text-sm text-gray-500">
              Rp 10.000,00 - Rp 10.000.000,00
            </p>
            <div className="w-full sm:w-[580px]">
              <InputFieldWPrefix
                type="text"
                name="topUpAmount"
                value={
                  inputAmount === ""
                    ? ""
                    : parseInt(inputAmount).toLocaleString("id-ID")
                }
                onChange={handleOnInput}
                placeholder="Input top up amount here"
                err={isValidAmount.valid ? "" : isValidAmount.errorMess}
              />
            </div>
          </div>

          <Button variants="primary" onClick={handleTopUp}>
            Top Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default TopUp;
