import React, { ReactNode } from "react";
import { Sidebar } from "@/components/Navigation/Sidebar/Sidebar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />

      <div className="container w-[79%] relative left-[21%] px-14 min-h-screen">
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
