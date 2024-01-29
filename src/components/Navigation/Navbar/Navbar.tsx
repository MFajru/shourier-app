import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../../public/logos/logo.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useUserStore } from "@/stores/userStore";
import Spinner from "@/components/Loading/Spinner";
import Cookies from "js-cookie";
import { useShippingStore } from "@/stores/shippingStore";
import { lchown } from "fs";

const Navbar = () => {
  const router = useRouter();
  const userId = Cookies.get("userId");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const { user, isLoading, getUser, resetUserStore } = useUserStore();

  const handleLogout = () => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      var neededAttributes = {
        token: "",
        userId: "",
      };
      Cookies.remove(cookieName, neededAttributes);
    });

    router.replace("/");
    resetUserStore();
    setIsOpenMobile(false);
  };

  useEffect(() => {
    if (userId) {
      getUser(userId);
      return;
    }
  }, [getUser, userId]);

  useEffect(() => {
    if (isOpenMobile) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [isOpenMobile]);

  return (
    <div className="relative">
      {isOpenMobile && (
        <div className="fixed min-w-full min-h-screen bg-black/10 z-50 left-0">
          <div className="min-h-screen w-[80%] bg-white flex flex-col gap-24 font-semibold text-2xl p-10 z-50 top-0 left-0 ease-in-out duration-1000">
            <button onClick={() => setIsOpenMobile(!isOpenMobile)}>
              <ArrowLeftIcon width={30} height={30} />
            </button>
            <div className="flex flex-col gap-10">
              <Link
                href={"/"}
                onClick={() => setIsOpenMobile(false)}
                className={router.pathname === "/" ? "font-bold underline" : ""}
              >
                Home
              </Link>
              <Link
                href={"/user/shipping"}
                onClick={() => setIsOpenMobile(false)}
                className={
                  router.pathname.startsWith("/user/shipping")
                    ? "font-bold underline"
                    : ""
                }
              >
                My Shipping
              </Link>
              <Link
                href={"/user/address"}
                onClick={() => setIsOpenMobile(false)}
                className={
                  router.pathname.startsWith("/user/address")
                    ? "font-bold underline"
                    : ""
                }
              >
                Saved Address
              </Link>
              <Link
                href={"/user/topUp"}
                onClick={() => setIsOpenMobile(false)}
                className={
                  router.pathname.startsWith("/user/topUp")
                    ? "font-bold underline"
                    : ""
                }
              >
                Top Up
              </Link>

              <Link
                href={"/user/profile"}
                onClick={() => setIsOpenMobile(false)}
                className={
                  router.pathname.startsWith("/user/profile")
                    ? "font-bold underline"
                    : ""
                }
              >
                Profile
              </Link>
              <button className="text-left text-red-500" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div className="flex gap-2 items-center">
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  <div
                    className={`w-12 h-12 avatar rounded-full ${
                      !user ? "border border-solid border-black" : ":"
                    }`}
                  >
                    <Image
                      src={
                        user && user.photo ? user.photo : "/pictures/avatar.png"
                      }
                      fill
                      sizes="100%"
                      alt="Profile Picture"
                    />
                  </div>
                  {user ? (
                    <p className="font-normal">{user.fname}</p>
                  ) : (
                    <Link href={"/auth/login"} className="text-3xl">
                      Login
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="fixed w-full flex items-center justify-between px-[5%] lg:px-[10%] h-20 z-40 bg-white">
        <div className="flex w-full justify-between lg:justify-start items-center lg:w-[85%] gap-14">
          <button
            className="lg:hidden"
            onClick={() => setIsOpenMobile(!isOpenMobile)}
          >
            <Bars3Icon width={24} height={24} />
          </button>
          <div onClick={() => router.push("/")}>
            <Image
              src={logoImage}
              alt="Shourier Logo"
              className="w-28 lg:w-36"
              priority
            />
          </div>
          <div className="hidden gap-10 font-semibold lg:flex">
            <Link
              href={"/"}
              className={router.pathname === "/" ? "font-bold underline" : ""}
            >
              Home
            </Link>
            <Link
              href={"/user/shipping"}
              className={
                router.pathname.startsWith("/user/shipping")
                  ? "font-bold underline"
                  : ""
              }
            >
              My Shipping
            </Link>
            <Link
              href={"/user/address"}
              className={
                router.pathname.startsWith("/user/address")
                  ? "font-bold underline"
                  : ""
              }
            >
              Saved Address
            </Link>
            <Link
              href={"/user/topUp"}
              className={
                router.pathname.startsWith("/user/topUp")
                  ? "font-bold underline"
                  : ""
              }
            >
              Top Up
            </Link>
          </div>
        </div>
        <div className="md:w-[25%] lg:flex justify-end items-center hidden">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div
                className={`w-9 h-9 avatar rounded-full ${
                  !user ? "border border-solid border-black" : ":"
                }`}
              >
                <Image
                  src={user && user.photo ? user.photo : "/pictures/avatar.png"}
                  fill
                  sizes="100%"
                  alt="Profile Picture"
                />
              </div>
              {user ? (
                <div className="relative">
                  <button
                    className="btn btn-ghost text-sm"
                    onClick={() => setIsOpenProfile(!isOpenProfile)}
                  >
                    {user.fname}
                    <ChevronDownIcon width={10} height={10} />
                  </button>
                  {isOpenProfile && (
                    <div className="flex flex-col gap-6 absolute left-2 bg-white shadow-md rounded-lg p-4 text-sm">
                      <Link
                        href={"/user/profile"}
                        onClick={() => setIsOpenProfile(false)}
                        className={
                          router.pathname.startsWith("/user/profile")
                            ? "font-bold underline"
                            : ""
                        }
                      >
                        Profile
                      </Link>
                      <button className="text-red-500" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={"/auth/login"} className="font-semibold pl-4">
                  Login
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
