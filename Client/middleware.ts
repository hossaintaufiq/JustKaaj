
import { NextRequest, NextResponse } from "next/server";
type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  admin: [/^\/admin/],
};

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  // Call backend API to get user
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
  });
  const userInfo = res.ok ? await res.json() : null;

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirectPath=${pathname}`, req.url)
    );
  }

  if (
    userInfo?.role &&
    roleBasedPrivateRoutes[userInfo.role as Role]?.some((route) =>
      pathname.match(route)
    )
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", req.url));
};

export const config={
    matcher:[
    "/",                 // homepage
    "/login",            // login page
    "/register",         // register page
    "/profile/user/:path*",
    "/profile/provider/:path*",
    "/admin/dashboard/:path*",

    ]
}
