import Cookies from "js-cookie";
import { NextRouter } from "next/router";

export const handleLogout = (router: NextRouter) => {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    var neededAttributes = {
      token: "",
      userId: "",
    };
    Cookies.remove(cookieName, neededAttributes);
  });
  localStorage.clear();
  router.replace("/");
};
