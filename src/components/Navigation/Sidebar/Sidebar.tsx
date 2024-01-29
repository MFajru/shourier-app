import { Button } from "@/components/Button/Button";
import Image from "next/image";
import logoImage from "../../../../public/logos/logo.png";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export function Sidebar() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleLogout = () => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      var neededAttributes = {
        token: "",
        userId: "",
      };
      Cookies.remove(cookieName, neededAttributes);
    });
    router.replace("/");
  };
  return (
    <>
      {isModalOpen && (
        <Modal variants="custom" setIsOpen={setIsModalOpen}>
          <div className="flex justify-between border-b border-slate-300">
            <p className="text-primary-orange text-xl mx-5">Confirm Logout</p>
          </div>
          <div className="text-xl mx-10 h-[100px] flex items-center">
            <p> Are you sure want to logout? </p>
          </div>
          <div className="flex gap-3 px-3 pt-4 justify-end border-t border-slate-300">
            <div>
              <Button variants="error" onClick={handleLogout}>
                Yes
              </Button>
            </div>
            <div>
              <Button onClick={() => setIsModalOpen(false)}>No</Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="w-[21%] bg-primary min-h-screen fixed left-0 px-7 py-20 z-10 rounded-r-lg flex flex-col gap-20 items-start">
        <div
          className="w-full h-full flex justify-center cursor-pointer"
          onClick={() => router.replace("/admin/shipping")}
        >
          <Image
            src={logoImage}
            alt="Shourier Logo"
            className="text-center rounded-xl w-44"
            priority
          />
        </div>
        <div className="flex flex-col gap-7 h-full w-full text-center text-white">
          <Link
            href="/admin/shipping"
            className={
              router.pathname.startsWith("/admin/shipping")
                ? "font-bold underline"
                : ""
            }
          >
            Manage Shipping
          </Link>
          <Link
            href="/admin/address"
            className={
              router.pathname.startsWith("/admin/address")
                ? "font-bold underline"
                : ""
            }
          >
            Manage Origin Address
          </Link>
          <Link
            href="/admin/promo"
            className={
              router.pathname.startsWith("/admin/promo")
                ? "font-bold underline"
                : ""
            }
          >
            Manage Promo
          </Link>
          <Link
            href={"/admin/earningReports"}
            className={
              router.pathname.startsWith("/admin/earningReports")
                ? "font-bold underline"
                : ""
            }
          >
            Earning Reports
          </Link>
          <Link
            href="/admin/profile"
            className={
              router.pathname.startsWith("/admin/profile")
                ? "font-bold underline"
                : ""
            }
          >
            Profile
          </Link>
        </div>
        <div className="flex flex-col w-full text-center h-64 justify-end">
          <Button
            type="button"
            variants="logout"
            onClick={() => setIsModalOpen(true)}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}
