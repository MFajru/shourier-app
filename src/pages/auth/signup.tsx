import { Button } from "@/components/Button/Button";
import { InputField } from "@/components/Form/InputField";
import { isValidEmail } from "@/utils/formValidation/isValidEmail";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { AuthLayout } from "../../components/Layout/AuthLayout";
import { User } from "@/types";
import axios from "axios";
import { apiBaseUrl } from "@/config";
import { generateRefCode } from "@/utils/generator/generateRefCode";
import { generateToken } from "@/utils/generator/generateToken";
import { isNumber } from "chart.js/helpers";
import { regexToNumber } from "@/utils/formValidation/isNumber";

type formSignUpError = {
  fname: boolean;
  email: boolean;
  phoneNumber: boolean;
  password: boolean;
  confirmPass: boolean;
};

const SignUp = () => {
  const [registerValue, setRegisterValue] = useState<Partial<User>>({
    fname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPass: "",
    refCodeFriend: "",
  });
  const [isError, setIsError] = useState<formSignUpError>({
    fname: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPass: false,
  });
  const [existedUsers, setExistedUsers] = useState<Partial<User>[]>([]);
  const [isRefCodeFound, setIsRefCodeFound] = useState<boolean>(true);
  const [userRefCodeUsed, setUserRefCodeUsed] = useState<Partial<User>>({
    id: 0,
    refCodeUsedCount: 0,
  });
  const correctPassword: boolean =
    registerValue.password === registerValue.confirmPass;
  const router = useRouter();

  const getExistedUser = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/users`);
      if (response.status != 200) {
        throw new Error(`Something bad happened ${response.statusText}`);
      }
      const usersData = response.data;
      const tempArr = [];
      for (const user of usersData) {
        if (user.role != "admin") {
          const tempObj = {
            email: user.email,
            refCode: user.refCode,
          };
          tempArr.push(tempObj);
        }
      }
      setExistedUsers(tempArr);
    } catch (error) {
      console.error(error);
    }
  };

  const patchUser = async (userId: number, usedAmount: number) => {
    try {
      const response = await axios.patch(`${apiBaseUrl}/users/${userId}`, {
        refCodeUsedCount: usedAmount,
      });
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Save successfull");
      return response.data;
    } catch (error) {
      toast.error("Update failed, there is something wrong.");
      console.error(error);
    }
  };

  const fetchRegister = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}/users`, {
        role: "user",
        token: generateToken(),
        email: registerValue.email,
        password: registerValue.password,
        fname: registerValue.fname,
        phoneNumber: registerValue.phoneNumber,
        photo: "/pictures/avatar.png",
        balance: 0,
        refCode: generateRefCode(),
        refCodeFriend: registerValue.refCodeFriend,
        refCodeUsedCount: 0,
        completedShipments: 0,
        totalSpent: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      if (response.status != 201) {
        throw new Error(`Something bad happened ${response.statusText}`);
      }
      toast.success("Register successfull");
    } catch (error) {
      toast.error("Register failed, server error");
      console.error(error);
    }
  };

  const postShipping = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}/shipping`, {
        userId: existedUsers.length + 2,
        shippingDetails: [],
      });
      if (response.status != 201) {
        throw new Error("Failed to create shipping boilerplate");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postDestinationAddress = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}/destinationAddress`, {
        userId: existedUsers.length + 2,
        address: [],
      });
      if (response.status != 201) {
        throw new Error("Failed to create shipping boilerplate");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setIsRefCodeFound(true);
    setIsError((prevData) => {
      return { ...prevData, [e.target.name]: false };
    });

    if (e.target.name === "refCodeFriend") {
      setRegisterValue((existingVal) => {
        return {
          ...existingVal,
          refCodeFriend: value.replace(" ", "").toUpperCase(),
        };
      });
      return;
    }
    if (e.target.name === "phoneNumber" && value.length <= 12) {
      value = regexToNumber(value);
      setRegisterValue((existingVal) => {
        return { ...existingVal, [e.target.name]: value };
      });
      return;
    }

    if (e.target.name !== "phoneNumber") {
      setRegisterValue((existingVal) => {
        return { ...existingVal, [e.target.name]: value };
      });
    }
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredField: Partial<User> = {
      fname: registerValue.fname,
      email: registerValue.email,
      phoneNumber: registerValue.phoneNumber,
      password: registerValue.password,
      confirmPass: registerValue.confirmPass,
    };
    if (
      isValidForm(requiredField, setIsError) &&
      correctPassword &&
      isValidEmail(registerValue.email!)
    ) {
      let isOk = false;

      for (const existedUser of existedUsers) {
        if (registerValue.email === existedUser.email) {
          setIsError((prevData) => {
            return {
              ...prevData,
              email: true,
            };
          });
          break;
        }
        if (
          registerValue.refCodeFriend === existedUser.refCode ||
          registerValue.refCodeFriend === ""
        ) {
          if (
            registerValue.refCodeFriend === existedUser.refCode &&
            existedUser.refCodeUsedCount
          ) {
            setUserRefCodeUsed({
              id: existedUser.id,
              refCodeUsedCount: existedUser.refCodeUsedCount + 1,
            });
          }
          setIsError((prevData) => {
            return {
              ...prevData,
              email: false,
            };
          });
          isOk = true;
          break;
        }
        if (registerValue.refCodeFriend != "") {
          setIsRefCodeFound(false);
        }
      }

      if (isOk) {
        await fetchRegister();
        await postShipping();
        await postDestinationAddress();
        if (
          userRefCodeUsed.id &&
          userRefCodeUsed.refCodeUsedCount &&
          userRefCodeUsed.id !== 0 &&
          userRefCodeUsed.refCodeUsedCount !== 0
        ) {
          await patchUser(userRefCodeUsed.id, userRefCodeUsed.refCodeUsedCount);
        }
        setTimeout(() => {
          router.push("/auth/login");
        }, 1000);
      }
      return;
    }
  };

  useEffect(() => {
    getExistedUser();
  }, []);

  return (
    <AuthLayout page="signup">
      <Toaster richColors position="top-center" />
      <div className="flex flex-col mt-14 justify-center w-full max-h-screen">
        <div className="flex flex-col">
          <h1 className="text-4xl text-black">Get Started Now</h1>
        </div>
        <form
          className="flex flex-col w-full mt-2"
          onSubmit={handleOnSubmit}
          noValidate
        >
          <InputField
            type="text"
            label="Full Name"
            placeholder="Your full name here..."
            value={registerValue.fname!}
            onChange={handleOnChange}
            name="fname"
            err={isError.fname ? "Full Name must be filled" : ""}
          />
          <InputField
            type="email"
            label="Email"
            placeholder="Your email here..."
            value={registerValue.email!}
            onChange={handleOnChange}
            name="email"
            err={
              isError.email && registerValue.email === ""
                ? "Email must be filled"
                : isError.email && registerValue.email != ""
                ? "Email already exist"
                : !isValidEmail(registerValue.email!) && registerValue.email
                ? "Invalid email format, ex: john@mail.com"
                : ""
            }
          />
          <InputField
            type="text"
            label="Phone Number"
            placeholder="Your phone number here..."
            value={registerValue.phoneNumber!}
            onChange={handleOnChange}
            name="phoneNumber"
            err={isError.phoneNumber ? "Phone number must be filled" : ""}
          />
          <InputField
            type="password"
            label="Password"
            placeholder="Your password here..."
            value={registerValue.password!}
            onChange={handleOnChange}
            name="password"
            err={isError.password ? "Password must be filled" : ""}
          />
          <InputField
            type="password"
            label="Confirm Password"
            placeholder="Your confirm password here..."
            value={registerValue.confirmPass!}
            onChange={handleOnChange}
            name="confirmPass"
            err={`${
              isError.confirmPass
                ? "Confirm password must be filled"
                : !correctPassword && registerValue.confirmPass !== ""
                ? "Password not match"
                : ""
            }`}
          />
          <InputField
            type="text"
            label="Referral Code"
            placeholder="Your referral code here (optional)"
            value={registerValue.refCodeFriend!}
            onChange={handleOnChange}
            name="refCodeFriend"
            err={!isRefCodeFound ? "Referal code not found" : ""}
          />
          <div className="mt-3">
            <Button type="submit" variants="primary">
              Sign Up
            </Button>
          </div>
        </form>
        <p className="text-black mt-5">
          Have an account?{" "}
          <Link href={"/auth/login"} className="cursor-pointer font-semibold">
            Log in here
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
