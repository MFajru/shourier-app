import Button from "@/components/Button/Button";
import CustomCard from "@/components/Card/CustomCard";
import { InputField } from "@/components/Form/InputField";
import Spinner from "@/components/Loading/Spinner";
import Modal from "@/components/Modal/Modal";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { useShippingStore } from "@/stores/shippingStore";
import { useUserStore } from "@/stores/userStore";
import { Promo, Shipping, ShippingDetail } from "@/types";
import { formatToRupiah } from "@/utils/formatter/formatToRupiah";
import { printAddOn } from "@/utils/printAddOn";
import { printCategory } from "@/utils/printCategory";
import confirmationImage from "../../../../public/pictures/shippingConfirmation.png";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { Toaster, toast } from "sonner";

type TUsedPromo = {
  id: number;
  used: number;
};

const ShippingPayment = () => {
  const router = useRouter();
  const userId = Cookies.get("userId");
  const { savedShippingForm, saveShippingForm } = useShippingStore();
  const { user } = useUserStore();
  const [isValidPromo, setIsValidPromo] = useState<boolean | null>(null);
  const [patchId, setPatchId] = useState<number>(0);
  const [existingShippingDetails, setExistingShippingDetils] = useState<
    ShippingDetail[]
  >([]);
  const [promoErrorMess, setPromoErrorMess] = useState<string>("");
  const [promoDiscount, setPromoDiscount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfModalOpen, setIsConfModalOpen] = useState<boolean>(false);
  const [usedPromo, setUsedPromo] = useState<TUsedPromo>({
    id: 0,
    used: 0,
  });

  const promos = useCustomSWR<Promo[]>(`${apiBaseUrl}/promos`);
  const shipping = useCustomSWR<Shipping[]>(`${apiBaseUrl}/shipping`);

  const patchUpdateUser = async (newBalance: number, newTotalSpent: number) => {
    try {
      const response = await axios.patch(`${apiBaseUrl}/users/${userId}`, {
        balance: newBalance,
        totalSpent: newTotalSpent,
      });
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const patchShipping = async (newShippingDetails: ShippingDetail[]) => {
    try {
      const response = await axios.patch(`${apiBaseUrl}/shipping/${patchId}`, {
        shippingDetails: newShippingDetails,
      });
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Successfully add new shipping");
      setIsModalOpen(true);
      return response.data;
    } catch (error) {
      toast.error(
        "Failed to add shipping, please check your data or contact administrator"
      );
      console.error(error);
    }
  };

  const patchPromo = async () => {
    try {
      const response = await axios.patch(
        `${apiBaseUrl}/promos/${usedPromo.id}`,
        {
          used: usedPromo.used + 1,
        }
      );
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompletePayment = async () => {
    setIsConfModalOpen(false);
    if (
      savedShippingForm &&
      user &&
      user.balance &&
      user.balance < savedShippingForm.costAfter
    ) {
      toast.error("Insufficient balance, please top up your balance");
      return;
    }

    if (
      existingShippingDetails.length != 0 &&
      patchId != 0 &&
      savedShippingForm &&
      user &&
      user.balance &&
      user.totalSpent
    ) {
      const newShippingDetails = existingShippingDetails;
      newShippingDetails.push(savedShippingForm);
      const newBalance = user.balance - savedShippingForm.costAfter;
      const newTotalSpent = user.totalSpent + savedShippingForm.costAfter;
      await patchShipping(newShippingDetails);
      await patchUpdateUser(newBalance, newTotalSpent);
      if (usedPromo.id != 0) {
        await patchPromo();
      }
    }
  };

  const handlePromo = () => {
    if (promos.data && savedShippingForm && savedShippingForm.promoUsed) {
      for (const promo of promos.data) {
        if (promo.promoCode === savedShippingForm.promoUsed) {
          if (parseInt(promo.quota) === promo.used) {
            setIsValidPromo(false);
            setPromoErrorMess("Promo has reached maximum quota");
            return;
          }
          if (promo.expiryDate === new Date().toLocaleString()) {
            setIsValidPromo(false);
            setPromoErrorMess("Promo has expired");
            return;
          }
          setPromoDiscount(parseInt(promo.discount));
          setUsedPromo({
            id: promo.id!,
            used: promo.used,
          });
          setIsValidPromo(true);
          setPromoErrorMess("");
          saveShippingForm({
            ...savedShippingForm,
            costAfter:
              savedShippingForm.costBefore *
              ((100 - parseInt(promo.discount)) / 100),
            discountAmount:
              savedShippingForm.costBefore * (parseInt(promo.discount) / 100),
          });
          return;
        }
      }
      setIsValidPromo(false);
      setPromoErrorMess("Invalid Promo");
    }
  };

  const handleChangePromo = () => {
    setIsValidPromo(null);
    setPromoDiscount(0);
  };

  const handleOnChangePromo = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValidPromo(null);
    setPromoErrorMess("");
    let value = e.target.value;
    if (savedShippingForm) {
      if (value === " ") {
        value = "";
      }
      value = e.target.value.replace(" ", "").toUpperCase();

      saveShippingForm({
        ...savedShippingForm,
        [e.target.name]: value,
      });
    }
  };

  useEffect(() => {
    if (userId && shipping.data) {
      for (const ship of shipping.data) {
        if (parseInt(userId) === ship.userId) {
          setExistingShippingDetils(ship.shippingDetails);
          setPatchId(ship.id);
          return;
        }
      }
    }
  }, [userId, shipping.data]);

  useEffect(() => {
    if (isModalOpen || isConfModalOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
  }, [isModalOpen, isConfModalOpen]);

  useEffect(() => {
    if (!promos.data) {
      promos.mutate();
    }
  });

  useEffect(() => {
    useShippingStore.persist.rehydrate();
  }, []);

  return (
    <>
      <Toaster position="top-center" richColors />
      {isConfModalOpen && (
        <Modal variants="custom" setIsOpen={setIsConfModalOpen}>
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4 w-4/5">
              <h3 className="font-semibold text-3xl text-center">
                Payment Confirmation
              </h3>
              <p className="text-center text-lg">
                Are you sure you want to complete the payment?
              </p>
            </div>
            <div className="w-9/12 flex flex-col gap-4">
              <Button variants="primary" onClick={handleCompletePayment}>
                Yes
              </Button>
              <button
                className="btn btn-outline btn-primary w-full"
                onClick={() => setIsConfModalOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
      {isModalOpen && (
        <Modal variants="custom" setIsOpen={setIsModalOpen}>
          <div className="flex flex-col items-center gap-10">
            <div className="w-72">
              <Image
                src={confirmationImage}
                alt="Picture of box in top of earth"
              />
            </div>
            <div className="flex flex-col items-center gap-4 w-9/12">
              <h3 className="font-semibold text-3xl text-center">
                Shipping Confirmed
              </h3>
              <p className="text-center text-lg">
                Your shipment is on progress, please go to &quot;My
                Shipping&quot; page to see the status.
              </p>
            </div>
            <div className="w-9/12 flex flex-col gap-4">
              <Button
                variants="primary"
                onClick={() => {
                  router.replace("/user/shipping");
                  saveShippingForm(null);
                }}
              >
                Go to My Shipping Page
              </Button>
              <button
                className="btn btn-outline btn-primary w-full"
                onClick={() => router.replace("/")}
              >
                Go to My Homepage
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div className={`flex flex-col`}>
        <div className="bg-primary w-full py-12 px-[5%] lg:px-[12%]">
          <h1 className="text-3xl font-semibold text-white">Payment Page</h1>
        </div>
        {!savedShippingForm && <Spinner />}
        {savedShippingForm && (
          <>
            <div className="py-10 px-[5%] lg:px-[12%] flex flex-col-reverse lg:flex-row justify-between gap-6">
              <div className="flex flex-col w-full lg:w-1/3 justify-start gap-6">
                <CustomCard cardTitle="Cost Summary">
                  <div className="flex flex-col font-medium gap-3 mt-6">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-lg">Shipping Cost</p>
                        <p className="text-xs text-gray-400">
                          {printCategory(savedShippingForm.category)}
                        </p>
                      </div>
                      <p className="text-lg">
                        {formatToRupiah(savedShippingForm.categoryCost)}
                      </p>
                    </div>
                    <div className="flex justify-between text-lg">
                      <p>Promo Code</p>
                      <p>
                        {savedShippingForm.promoUsed != ""
                          ? savedShippingForm.promoUsed
                          : "-"}
                      </p>
                    </div>
                    <div className="flex justify-between text-lg">
                      <p>Promo Discount</p>
                      <p className="text-red-500">
                        -
                        {formatToRupiah(
                          savedShippingForm.costBefore * (promoDiscount / 100)
                        )}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col text-lg">
                        <p>Add On</p>
                        <p className="text-xs text-gray-400">
                          {printAddOn(savedShippingForm.addOn)}
                        </p>
                      </div>
                      <p className="text-lg">
                        {formatToRupiah(savedShippingForm.addOnCost)}
                      </p>
                    </div>
                    <div className="flex justify-between font-semibold border-t border-black pt-6 mt-3">
                      <p className="text-semibold">Grand Total</p>
                      <p className="text-xl">
                        {promoDiscount === 0
                          ? formatToRupiah(savedShippingForm.costBefore)
                          : formatToRupiah(savedShippingForm.costAfter)}
                      </p>
                    </div>
                  </div>
                </CustomCard>
                <CustomCard cardTitle="Use Promo">
                  <div className="flex flex-col relative pb-4">
                    <div className="flex gap-4 items-end">
                      <InputField
                        page="promo"
                        type="text"
                        name="promoUsed"
                        value={savedShippingForm.promoUsed}
                        placeholder="Input promo here"
                        onChange={handleOnChangePromo}
                        err={!isValidPromo ? promoErrorMess : ``}
                        disabled={
                          isValidPromo && promoDiscount != 0 ? true : false
                        }
                      />
                      {isValidPromo && promoDiscount != 0 && (
                        <p className="text-green-500 absolute text-xs -bottom-1">
                          {savedShippingForm.promoUsed} is applied!
                        </p>
                      )}
                      {isValidPromo && promoDiscount != 0 ? (
                        <button
                          className="btn btn-outline btn-primary rounded-2xl"
                          onClick={handleChangePromo}
                        >
                          Change
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline btn-primary rounded-2xl"
                          onClick={handlePromo}
                        >
                          Check
                        </button>
                      )}
                    </div>
                  </div>
                </CustomCard>
              </div>
              <div className="flex flex-col w-full lg:w-2/3 justify-start gap-6">
                <div className="w-full">
                  <CustomCard cardTitle={"Your Balance"}>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-green-500 font-semibold  text-3xl">
                        {user && user.balance && formatToRupiah(user.balance)}
                      </p>
                      <button className="btn btn-link text-lg">Top Up</button>
                    </div>
                  </CustomCard>
                </div>
                <CustomCard cardTitle={"Shipping Detail"}>
                  <table className="text-lg font-medium mt-6 border-separate border-spacing-2">
                    <tbody>
                      <tr>
                        <td>Length</td>
                        <td>{savedShippingForm.length} CM</td>
                      </tr>
                      <tr>
                        <td>Width</td>
                        <td>{savedShippingForm.width} CM</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{savedShippingForm.height} CM</td>
                      </tr>
                      <tr>
                        <td>Receiver Name</td>
                        <td>{savedShippingForm.receiver}</td>
                      </tr>
                      <tr>
                        <td>Receiver Phone Number</td>
                        <td>{savedShippingForm.receiverPhone}</td>
                      </tr>
                      <tr>
                        <td>Origin Address</td>
                        <td>{savedShippingForm.originFull}</td>
                      </tr>
                      <tr>
                        <td>Destination Address</td>
                        <td>{savedShippingForm.destinationFull}</td>
                      </tr>
                    </tbody>
                  </table>
                </CustomCard>
              </div>
            </div>
            <div className="flex flex-col gap-6 my-8 px-[5%] lg:px-[12%]">
              <Button
                variants="primary"
                onClick={() => setIsConfModalOpen(true)}
              >
                Complete to Payment
              </Button>
              <Button variants="borderedError" onClick={() => router.back()}>
                Cancel Payment
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShippingPayment;
