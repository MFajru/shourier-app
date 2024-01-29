import React, { ReactNode, useEffect, useState } from "react";
import { InputField } from "@/components/Form/InputField";
import Button from "@/components/Button/Button";

type TTable = {
  tableHeads: string[];
  isHeadAbleToSort: boolean[];
  children: ReactNode;
  buttonNextToSearch?: ReactNode;
  onClickHead: (() => void)[];
  searchInput: string;
  searchPlaceholder: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
  handleOnSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Table = ({
  tableHeads,
  isHeadAbleToSort,
  children,
  buttonNextToSearch,
  onClickHead,
  searchInput,
  searchPlaceholder,
  handleOnSearch,
  page,
  setPage,
  activePage,
  setActivePage,
  totalPage,
}: TTable) => {
  const [arrPage, setArrPage] = useState<number[]>([]);

  const handleGoToFirstPage = () => {
    setPage(0);
    setActivePage(0);
  };

  const handleGoToLastPage = () => {
    if (totalPage != 0) {
      setPage(totalPage - 1);
      setActivePage(totalPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page != totalPage - 1) {
      setPage(page + 1);
      setActivePage(activePage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page != 0) {
      setPage(page - 1);
      setActivePage(activePage - 1);
    }
  };

  const handleNumPage = (idx: number) => {
    setPage(idx);
    setActivePage(idx);
  };

  useEffect(() => {
    let numArr = [];
    for (let i = 0; i < totalPage; i++) {
      numArr.push(i + 1);
    }
    setArrPage(numArr);
  }, [totalPage]);

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-end items-center gap-4">
        {buttonNextToSearch}
        <div className="w-72">
          <InputField
            type="text"
            name="filter"
            variants="small"
            placeholder={`Search by ${searchPlaceholder}`}
            value={searchInput}
            onChange={handleOnSearch}
            err=""
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table text-black text-base">
          <thead className="text-sm">
            <tr>
              {tableHeads.map((head, idx) =>
                isHeadAbleToSort[idx] ? (
                  <th
                    key={idx}
                    onClick={onClickHead[idx]}
                    className="cursor-pointer"
                  >
                    {head}
                  </th>
                ) : (
                  <th key={idx}>{head}</th>
                )
              )}
              <th></th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <div className="flex gap-1">
          <div className="w-10">
            <Button onClick={handleGoToFirstPage}>{`<<`}</Button>
          </div>
          <div className="w-10">
            <Button onClick={handlePrevPage}>{`<`}</Button>
          </div>
          {arrPage.map((numPage, idx) => (
            <div className="w-10" key={idx}>
              <Button
                variants={activePage === idx ? "active" : ""}
                onClick={() => handleNumPage(idx)}
              >
                {numPage}
              </Button>
            </div>
          ))}
          <div className="w-10">
            <Button onClick={handleNextPage}>{`>`}</Button>
          </div>
          <div className="w-10">
            <Button onClick={handleGoToLastPage}>{`>>`}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
