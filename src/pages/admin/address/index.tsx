import Button from "@/components/Button/Button";
import AdminLayout from "@/components/Layout/AdminLayout";
import Table from "@/components/Table/Table";
import { apiBaseUrl } from "@/config";
import { Address, TDelete } from "@/types";
import { limit } from "@/lib/limitShowedData";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Toaster, toast } from "sonner";
import Modal from "@/components/Modal/Modal";
import { useCustomSWR } from "@/hooks/useCustomSWR";

const ManageAddress = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<"asc" | "desc">("asc");
  const [originAddressState, setOriginAddressState] = useState<Address[]>([]);
  const [prevAddressData, setPrevAddressData] = useState<Address[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deletedAddress, setDeletedAddress] = useState<TDelete>({
    name: "",
    id: 0,
  });
  const router = useRouter();

  const deleteAddress = async (addressId: number) => {
    try {
      const response = await axios.delete(
        `${apiBaseUrl}/originAddress/${addressId}`
      );
      if (response.status != 200) {
        throw new Error(
          `Something wrong with the request, delete failed. Status: ${response.statusText}`
        );
      }
      toast.success("Delete Successfull");
      return response.data;
    } catch (error) {
      toast.error("Something wrong, delete failed");
      console.error(error);
    }
  };

  const originAddress = useCustomSWR<Address[]>(`${apiBaseUrl}/originAddress`);

  const handleDelete = async (addressId: number) => {
    await deleteAddress(addressId);
    setIsModalOpen(false);
    originAddress.mutate();
  };

  const handleOpenModal = (deletedAddress: TDelete) => {
    setIsModalOpen(true);
    setDeletedAddress(deletedAddress);
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPage(0);
    setActivePage(0);
    setSearchInput(value);
    if (originAddressState) {
      const result = originAddressState.filter((address) =>
        address.addressName.toLocaleLowerCase().includes(value.toLowerCase())
      );
      setOriginAddressState(result);
    }

    if (value === "") {
      setOriginAddressState(prevAddressData);
    }
  };

  const compareCity = (a: Address, b: Address) => {
    if (a.city < b.city) {
      return -1;
    }

    if (a.city > b.city) {
      return 1;
    }

    return 0;
  };

  const handleOnSortCity = () => {
    if (orderBy === "asc") {
      originAddressState.sort(compareCity);
      setOrderBy("desc");
    } else {
      originAddressState.sort(compareCity).reverse();
      setOrderBy("asc");
    }
  };

  useEffect(() => {
    let total = 0;
    if (originAddressState) {
      total = originAddressState.length;
      setTotalPage(Math.ceil(total / limit));
    }
  }, [originAddressState]);

  useEffect(() => {
    if (originAddress.data) {
      setOriginAddressState(originAddress.data);
      setPrevAddressData(originAddress.data);
    }
  }, [originAddress.data]);

  return (
    <>
      {isModalOpen && (
        <Modal
          variants="delete"
          deletedDataName={deletedAddress.name}
          setIsOpen={setIsModalOpen}
          onHandleDelete={() => handleDelete(deletedAddress.id)}
        />
      )}
      <Toaster position="top-center" richColors />
      <AdminLayout>
        <h1 className="uppercase font-semibold text-2xl text-black pt-14">
          Manage Address List
        </h1>
        <div className="mt-5 flex flex-col">
          {originAddress.error && (
            <p className="text-black">
              Something went wrong, please refresh the page
            </p>
          )}
          {originAddress.isLoading ? (
            <div className="w-full flex justify-center">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          ) : (
            originAddress && (
              <Table
                tableHeads={["Name", "City", "Province", "Street"]}
                isHeadAbleToSort={[false, true, false, false]}
                onClickHead={[
                  () => null,
                  () => handleOnSortCity(),
                  () => null,
                  () => null,
                ]}
                searchInput={searchInput}
                searchPlaceholder="name"
                handleOnSearch={handleOnSearch}
                page={page}
                setPage={setPage}
                activePage={activePage}
                setActivePage={setActivePage}
                totalPage={totalPage}
                buttonNextToSearch={
                  <div>
                    <Button
                      variants="primarySmall"
                      onClick={() => router.push("/admin/address/addAddress")}
                    >
                      Add Address
                    </Button>
                  </div>
                }
              >
                {originAddressState
                  .slice(limit * page, limit * (page + 1))
                  .map((address) => (
                    <tr key={address.id}>
                      <td>{address.addressName}</td>
                      <td>{address.city}</td>
                      <td>{address.province}</td>
                      <td>{address.street}</td>
                      <td>
                        <div className="flex gap-2 items-center">
                          <Link
                            href={`/admin/address/${address.id}/editAddress`}
                            className="text-primary"
                          >
                            Edit
                          </Link>
                          <button
                            className="text-red-500"
                            onClick={() =>
                              address.id &&
                              handleOpenModal({
                                id: address.id,
                                name: address.addressName,
                              })
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                <tr></tr>
              </Table>
            )
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default ManageAddress;
