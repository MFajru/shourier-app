import React, { ReactNode } from "react";
import { Button } from "@/components/Button/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

type TModal = {
  children?: ReactNode;
  variants: "delete" | "custom";
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deletedDataName?: string;
  onHandleDelete?: () => void;
};

const Modal = ({
  setIsOpen,
  deletedDataName,
  onHandleDelete,
  children,
  variants,
}: TModal) => {
  return (
    <div className="flex flex-col justify-center items-center bg-black/40 z-[999] min-h-screen fixed top-0 left-0 w-screen">
      <div className="flex flex-col py-10 px-6 bg-[#F7F6F4] gap-6 rounded-lg">
        {variants === "delete" && (
          <>
            <div className="flex justify-between border-b border-slate-300">
              <p className="text-primary-orange text-xl mx-5">Confirm Delete</p>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon
                  width={25}
                  height={25}
                  className="text-primary-orange"
                />
              </button>
            </div>
            <div className="text-xl mx-10 h-[100px] flex items-center">
              <p>
                {" "}
                Are you sure want to delete{" "}
                <span className="text-primary-orange">{deletedDataName}</span> ?
              </p>
            </div>
            <div className="flex gap-3 px-3 pt-4 justify-end border-t border-slate-300">
              <div>
                <Button variants="primary" onClick={onHandleDelete}>
                  Yes
                </Button>
              </div>
              <div>
                <Button onClick={() => setIsOpen(false)}>No</Button>
              </div>
            </div>
          </>
        )}
        {variants === "custom" && <>{children}</>}
      </div>
    </div>
  );
};

export default Modal;
