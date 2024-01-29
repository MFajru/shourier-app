import Image from "next/image";
import { ReactNode } from "react";
import logoImage from "../../../public/logos/logo.png";
import loginImage from "../../../public/pictures/login.png";
import signUpImage from "../../../public/pictures/signup.png";
import Link from "next/link";

export const AuthLayout = ({
  children,
  page,
}: {
  children: ReactNode;
  page: "login" | "signup";
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col px-10 lg:px-28 py-10 w-full lg:w-1/2 max-h-screen">
        <Link href={"/"}>
          <Image
            src={logoImage}
            alt="Shourier Logo"
            className="absolute left-30 w-28 lg:w-36"
            priority
          />
        </Link>
        {children}
      </div>
      <div className="hidden lg:w-1/2 lg:h-screen lg:flex lg:flex-col lg:justify-center">
        {page === "login" ? (
          <Image src={loginImage} alt="Illustration of a courier" priority />
        ) : (
          <Image src={signUpImage} alt="Illustration of a courier" priority />
        )}
      </div>
    </div>
  );
};
