import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const token = request.cookies.get("token");
  if (
    token === undefined &&
    (request.nextUrl.pathname.startsWith("/user") ||
      request.nextUrl.pathname.startsWith("/admin"))
  ) {
    const redirectUrl = new URL("/auth/login", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl.toString());
  }

  if (
    token?.value?.includes("admin-") && 
    (request.nextUrl.pathname.startsWith("/user") ||
      request.nextUrl.pathname.startsWith("/auth") ||
      request.nextUrl.pathname === "/")
  ) {
    const redirectUrl = new URL("/admin/shipping", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl.toString());
  }

  if (
    token?.value?.includes("user-") &&
    (request.nextUrl.pathname.startsWith("/admin") ||
      request.nextUrl.pathname.startsWith("/auth"))
  ) {
    const redirectUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl.toString());
  }

  if (request.nextUrl.pathname === "/admin") {
    const redirectUrl = new URL("/admin/shipping", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  if (request.nextUrl.pathname === "/user") {
    const redirectUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }
};

export default middleware;
