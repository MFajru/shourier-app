import { Button } from "@/components/Button/Button";
import { InputField } from "@/components/Form/InputField";
import { isValidEmail } from "@/utils/formValidation/isValidEmail";
import { isValidForm } from "@/utils/formValidation/isValidForm";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { AuthLayout } from "../../components/Layout/AuthLayout";
import { User } from "@/types";
import Cookies from "js-cookie";
import axios from "axios";
import { apiBaseUrl } from "@/config";

type TLoginFormError = {
  email: boolean;
  password: boolean;
};

export const Login = () => {
  const [loginValue, setLoginValue] = useState<Partial<User>>({
    email: "",
    password: "",
  });
  const [isFormError, setIsFormError] = useState<TLoginFormError>({
    email: false,
    password: false,
  });
  const router = useRouter();

  const fetchLogin = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/users`);
      if (response.status != 200) {
        throw new Error(`Something bad happened ${response.statusText}`);
      }

      return response.data as User[];
    } catch (error) {
      toast.error("Login Failed, Please enter valid username and password");
      console.error(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormError((prevData) => {
      return {
        ...prevData,
        [e.target.name]: false,
      };
    });
    setLoginValue((existingData) => {
      return { ...existingData, [e.target.name]: e.target.value };
    });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isValidForm(loginValue, setIsFormError) &&
      isValidEmail(loginValue.email!)
    ) {
      const userData = await fetchLogin();
      for (const user of userData!) {
        if (
          loginValue.email === user.email &&
          loginValue.password === user.password
        ) {
          toast.success("Login Successfull");
          Cookies.set("token", user.token);
          Cookies.set("userId", user.id!.toString());
          setTimeout(() => {
            if (user.token.includes("admin")) {
              router.replace("/admin/shipping");
              return;
            }
            router.replace("/");
          }, 1200);
          return;
        }
      }
    }
    toast.error("Login Failed, please enter valid email and password");
  };

  return (
    <AuthLayout page="login">
      <Toaster richColors position="top-center" />
      <div className="flex flex-col py-28 justify-center w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-[40px] text-black">Welcome Back</h1>
          <p className="text-black">
            Enter your credentials to access your account
          </p>
        </div>
        <form
          className="flex flex-col w-full mt-16"
          onSubmit={handleOnSubmit}
          noValidate
        >
          <InputField
            type="email"
            label="Email"
            placeholder="Your email here..."
            value={loginValue.email!}
            onChange={handleOnChange}
            name="email"
            err={
              isFormError.email
                ? "Email must be filled"
                : !isValidEmail(loginValue.email!) && loginValue.email
                ? "Invalid email format, ex: john@mail.com"
                : ""
            }
          />
          <InputField
            type="password"
            label="Password"
            placeholder="Your password here..."
            value={loginValue.password!}
            onChange={handleOnChange}
            name="password"
            err={isFormError.password ? "Password must be filled" : ""}
          />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe" className="text-sm text-gray-500">
                Remember Me
              </label>
            </div>
            <p className="text-sm text-gray-500">Forgot password?</p>
          </div>

          <div className="mt-10">
            <Button type="submit" variants="primary">
              Log In
            </Button>
          </div>
        </form>
        <p className="text-black mt-5">
          {`Don't have an account? `}
          <Link href={"/auth/signup"} className="cursor-pointer font-semibold">
            Sign up here
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
