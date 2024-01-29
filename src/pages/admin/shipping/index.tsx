import AdminLayout from "@/components/Layout/AdminLayout";
import Table from "@/components/Table/Table";
import { apiBaseUrl } from "@/config";
import { DeconShippingDetail, Shipping, User } from "@/types";
import formatDate from "@/utils/formatter/formatDate";
import { limit } from "@/lib/limitShowedData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import Spinner from "@/components/Loading/Spinner";
import { printCategory } from "@/utils/printCategory";

const ManageShipping = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [shippingData, setShippingData] = useState<DeconShippingDetail[]>([]);
  const [prevShippingData, setPrevShippingData] = useState<
    DeconShippingDetail[]
  >([]);
  const [orderBy, setOrderBy] = useState<"asc" | "desc">("asc");

  const shipping = useCustomSWR<Shipping[]>(`${apiBaseUrl}/shipping`);
  const users = useCustomSWR<User[]>(`${apiBaseUrl}/users`);

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPage(0);
    setActivePage(0);
    setSearchInput(value);
    if (shippingData) {
      const result = shippingData.filter((detail) =>
        detail.id.toLowerCase().includes(value.toLowerCase())
      );
      setShippingData(result);
    }

    if (value === "") {
      setShippingData(prevShippingData);
    }
  };

  const compareShippingDetailId = (
    a: DeconShippingDetail,
    b: DeconShippingDetail
  ) => {
    if (a.id < b.id) {
      return -1;
    }

    if (a.id > b.id) {
      return 1;
    }

    return 0;
  };

  const compareShippingStatus = (
    a: DeconShippingDetail,
    b: DeconShippingDetail
  ) => {
    if (a.status < b.status) {
      return -1;
    }

    if (a.status > b.status) {
      return 1;
    }

    return 0;
  };

  const compareShippingCategory = (
    a: DeconShippingDetail,
    b: DeconShippingDetail
  ) => {
    return parseInt(b.category) - parseInt(a.category);
  };

  const comparePackageSize = (
    a: DeconShippingDetail,
    b: DeconShippingDetail
  ) => {
    return (
      parseInt(b.length) * parseInt(b.width) * parseInt(b.height) -
      parseInt(a.length) * parseInt(a.width) * parseInt(a.height)
    );
  };

  const handleOnSortShippingId = (sortBy: string) => {
    if (orderBy === "asc") {
      switch (sortBy) {
        case "shippingDetailId":
          shippingData.sort(compareShippingDetailId);
          break;
        case "packageSize":
          shippingData.sort(comparePackageSize);
          break;
        case "shippingCategory":
          shippingData.sort(compareShippingCategory);
          break;
        case "shippingStatus":
          shippingData.sort(compareShippingStatus);
          break;
      }
      setOrderBy("desc");
    } else {
      switch (sortBy) {
        case "shippingDetailId":
          shippingData.sort(compareShippingDetailId).reverse();
          break;
        case "packageSize":
          shippingData.sort(comparePackageSize).reverse();
          break;
        case "shippingCategory":
          shippingData.sort(compareShippingCategory).reverse();
          break;
        case "shippingStatus":
          shippingData.sort(compareShippingStatus).reverse();
          break;
      }
      setOrderBy("asc");
    }
  };

  useEffect(() => {
    let total = 0;
    if (shippingData) {
      total = shippingData.length;
      setTotalPage(Math.ceil(total / limit));
    }
  }, [shippingData]);

  useEffect(() => {
    if (shipping.data) {
      const arrItem: DeconShippingDetail[] = [];
      for (const item of shipping.data) {
        for (const detail of item.shippingDetails) {
          arrItem.push({ ...detail, shippingId: item.id, userId: item.userId });
        }
      }
      setShippingData(arrItem);
      setPrevShippingData(arrItem);
    }
  }, [shipping.data]);

  return (
    <AdminLayout>
      <h1 className="uppercase font-semibold text-2xl text-black pt-14">
        Manage Shipping List
      </h1>
      <div className="mt-5 flex flex-col">
        {(users.error || shipping.error) && (
          <p className="text-black">
            Something went wrong, please refresh the page
          </p>
        )}
        {users.isLoading || shipping.isLoading ? (
          <Spinner />
        ) : (
          shippingData && (
            <Table
              tableHeads={[
                "Shipping ID",
                "Sender Name",
                "Package Size",
                "Shipping Category",
                "Shipping Date",
                "Shipping Status",
              ]}
              isHeadAbleToSort={[true, false, true, true, false, true]}
              onClickHead={[
                () => handleOnSortShippingId("shippingDetailId"),
                () => null,
                () => handleOnSortShippingId("packageSize"),
                () => handleOnSortShippingId("shippingCategory"),
                () => null,
                () => handleOnSortShippingId("shippingStatus"),
              ]}
              searchInput={searchInput}
              searchPlaceholder="shipping ID"
              handleOnSearch={handleOnSearch}
              page={page}
              setPage={setPage}
              activePage={activePage}
              setActivePage={setActivePage}
              totalPage={totalPage}
            >
              {shippingData
                .slice(limit * page, limit * (page + 1))
                .map((shippingDetail) => (
                  <tr key={shippingDetail.id}>
                    <td>{shippingDetail.id}</td>
                    <td>
                      {users.data &&
                        users.data[shippingDetail.userId - 1].fname}
                    </td>
                    <td>
                      {(parseInt(shippingDetail.length) *
                        parseInt(shippingDetail.height) *
                        parseInt(shippingDetail.width)) /
                        1000000}{" "}
                      M&#179;
                    </td>
                    <td>{printCategory(shippingDetail.category)}</td>
                    <td>{formatDate(shippingDetail.createdAt)}</td>
                    {shippingDetail.status === "Pending" && (
                      <td className="text-white text-center">
                        <p className="bg-orange-500 py-0.5 rounded-full">
                          {shippingDetail.status}
                        </p>
                      </td>
                    )}
                    {shippingDetail.status === "On Delivery" && (
                      <td className="text-white text-center">
                        <p className="bg-green-500 py-0.5 rounded-full">
                          {shippingDetail.status}
                        </p>
                      </td>
                    )}
                    {shippingDetail.status === "Finished" && (
                      <td className="text-white text-center">
                        <p className="bg-gray-400 py-0.5 rounded-full">
                          {shippingDetail.status}
                        </p>
                      </td>
                    )}
                    <td>
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/shipping/${shippingDetail.shippingId}/${shippingDetail.id}/manage`}
                          className="text-primary hover:underline"
                        >
                          Manage
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </Table>
          )
        )}
      </div>
    </AdminLayout>
  );
};

export default ManageShipping;
