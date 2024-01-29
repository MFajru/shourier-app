import Navbar from "@/components/Navigation/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  if (router.pathname.startsWith("/auth")) {
    return children;
  }
  if (router.pathname.startsWith("/admin")) {
    return children;
  }
  if (router.pathname === "_error") {
    return children;
  }

  return (
    <div className="bg-[#F9FBFC]">
      <Navbar />
      <div className="min-h-screen pt-20 z-20">{children}</div>
    </div>
  );
};

export default Layout;
