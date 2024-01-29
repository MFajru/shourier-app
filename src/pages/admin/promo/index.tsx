import Button from "@/components/Button/Button";
import AdminLayout from "@/components/Layout/AdminLayout";
import Spinner from "@/components/Loading/Spinner";
import Modal from "@/components/Modal/Modal";
import Table from "@/components/Table/Table";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { limit } from "@/lib/limitShowedData";
import { Promo, TDelete } from "@/types";
import formatDate from "@/utils/formatter/formatDate";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

const ManagePromo = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [promosDataState, setPromosDataState] = useState<Promo[]>([]);
  const [prevPromosData, setPrevPromosData] = useState<Promo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deletedPromoData, setDeletedPromoData] = useState<TDelete>({
    id: 0,
    name: "",
  });

  const promos = useCustomSWR<Promo[]>(`${apiBaseUrl}/promos`);
  const deletePromo = async (promoId: number) => {
    try {
      const response = await axios.delete(`${apiBaseUrl}/promos/${promoId}`);
      if (response.status != 200) {
        throw new Error(`Delete failed, ${response.statusText}`);
      }
      toast.success("Delete successfull");
      return response.data;
    } catch (erorr) {
      toast.error("Something wrong, delete failed");
      console.error();
    }
  };

  const handleDelete = async (promoId: number) => {
    await deletePromo(promoId);
    setIsModalOpen(false);
    promos.mutate();
  };

  const handleOpenModal = (deletedPromo: TDelete) => {
    setIsModalOpen(true);
    setDeletedPromoData(deletedPromo);
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPage(0);
    setActivePage(0);
    setSearchInput(value);
    if (promosDataState) {
      const result = promosDataState.filter((promo) =>
        promo.promoCode.toLocaleLowerCase().includes(value.toLowerCase())
      );
      setPromosDataState(result);
    }

    if (value === "") {
      setPromosDataState(prevPromosData);
    }
  };

  useEffect(() => {
    if (promos.data) {
      setPromosDataState(promos.data);
      setPrevPromosData(promos.data);
    }
  }, [promos.data]);

  useEffect(() => {
    let total = 0;
    if (promosDataState) {
      total = promosDataState.length;
      setTotalPage(Math.ceil(total / limit));
    }
  }, [promosDataState]);

  return (
    <>
      {isModalOpen && (
        <Modal
          variants="delete"
          deletedDataName={deletedPromoData.name}
          setIsOpen={setIsModalOpen}
          onHandleDelete={() => handleDelete(deletedPromoData.id)}
        />
      )}
      <Toaster position="top-center" richColors />
      <AdminLayout>
        <h1 className="uppercase font-semibold text-2xl text-black pt-14">
          Manage Promo List
        </h1>
        <div className="mt-5 flex flex-col">
          {promos.error && (
            <p className="text-black">
              Something went wrong, please refresh the page
            </p>
          )}
          {promos.isLoading ? (
            <Spinner />
          ) : (
            promosDataState && (
              <Table
                tableHeads={[
                  "ID",
                  "Code",
                  "Discount",
                  "Quota",
                  "Used Amount",
                  "Expiration Date",
                ]}
                isHeadAbleToSort={[true, false, true, true, false, true]}
                onClickHead={[
                  () => null,
                  () => null,
                  () => null,
                  () => null,
                  () => null,
                  () => null,
                ]}
                searchPlaceholder="code"
                searchInput={searchInput}
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
                      onClick={() => router.push("/admin/promo/addPromo")}
                    >
                      Add Promo
                    </Button>
                  </div>
                }
              >
                {promosDataState
                  .slice(limit * page, limit * (page + 1))
                  .map((promo) => (
                    <tr key={promo.id}>
                      <td>{promo.id}</td>
                      <td>{promo.promoCode}</td>
                      <td>{promo.discount}%</td>
                      <td>{promo.quota}</td>
                      <td>{promo.used}</td>
                      <td>{formatDate(promo.expiryDate)}</td>
                      <td>
                        <div className="flex gap-2 items-center">
                          <Link
                            href={`/admin/promo/${promo.id}/editPromo`}
                            className="text-primary"
                          >
                            Edit
                          </Link>
                          <button
                            className="text-red-500"
                            onClick={() =>
                              promo.id &&
                              handleOpenModal({
                                id: promo.id,
                                name: promo.promoCode,
                              })
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </Table>
            )
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default ManagePromo;
