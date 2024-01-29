import CustomCard from "@/components/Card/CustomCard";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { useUserStore } from "@/stores/userStore";
import { Address, DestinationAddress, TDelete } from "@/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Spinner from "@/components/Loading/Spinner";
import Button from "@/components/Button/Button";
import { useRouter } from "next/router";
import { Toaster, toast } from "sonner";
import axios from "axios";
import Modal from "@/components/Modal/Modal";

const SavedAddress = () => {
  const userId = Cookies.get("userId");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deletedData, setDeletedData] = useState<TDelete>({
    name: "",
    id: 0,
  });

  const destAddress = useCustomSWR<DestinationAddress>(
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
        toast.success("Delete successfull");
        return response.data;
      }
    } catch (error) {
      toast.error("Failed to delete data, server error");
      console.error(error);
    }
  };

  const handleDeleteAddress = async (addressIdx: number) => {
    setIsModalOpen(false);
    if (destAddress.data) {
      const arrOfAddress = destAddress.data.address;
      arrOfAddress.splice(addressIdx, 1);
      await patchDestinationAddress(arrOfAddress);
      destAddress.mutate();
    }
  };

  useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);

  return (
    <>
      <Toaster position="top-center" richColors />
      {isModalOpen && (
        <Modal
          variants="delete"
          deletedDataName={deletedData.name}
          setIsOpen={setIsModalOpen}
          onHandleDelete={() => handleDeleteAddress(deletedData.id)}
        />
      )}
      <div className="flex flex-col">
        <div className="bg-primary w-full py-12 px-[5%] lg:px-[12%]">
          <h1 className="text-3xl font-semibold text-white">Saved Address</h1>
        </div>
        <div className="py-10 flex flex-col gap-8 px-[5%] lg:px-[12%] items-center">
          {destAddress.error && (
            <div>
              There is something wrong when getting the data, please refresh the
              page.
            </div>
          )}
          <div>
            <Button
              variants="primary"
              onClick={() => router.push("/user/address/newAddress")}
            >
              Add New Address
            </Button>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {!destAddress.error &&
            !destAddress.isLoading &&
            destAddress.data ? (
              destAddress.data.address.map((item, idx) => (
                <div className="w-full" key={idx}>
                  <CustomCard cardTitle={item.addressName}>
                    <div className="flex absolute top-5 right-5">
                      <button
                        className="p-2"
                        onClick={() =>
                          destAddress.data &&
                          router.push(
                            `/user/address/${destAddress.data.id}/${item.id}/editAddress`
                          )
                        }
                      >
                        <PencilIcon
                          width={28}
                          height={28}
                          className="text-primary"
                        />
                      </button>
                      <button
                        className="p-2"
                        onClick={() => {
                          setIsModalOpen(true);
                          setDeletedData({
                            name: item.addressName,
                            id: idx,
                          });
                        }}
                      >
                        <TrashIcon
                          width={28}
                          height={28}
                          className="text-error"
                        />
                      </button>
                    </div>
                    <table className="mt-2 border-separate border-spacing-2">
                      <tbody>
                        <tr>
                          <td className="font-semibold w-1/2">Receiver Name</td>
                          <td>: {item.receiver}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">
                            Receiver Phone Number
                          </td>
                          <td>: {item.receiverPhone}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Street</td>
                          <td>: {item.street}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">City</td>
                          <td>: {item.city}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Province</td>
                          <td>: {item.province}</td>
                        </tr>
                      </tbody>
                    </table>
                  </CustomCard>
                </div>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedAddress;
