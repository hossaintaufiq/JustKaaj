import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./service/Auth";
type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  ADMIN: [/^\/admin/, /^\/profile/],
  USER: [/^\/user/, /^\/profile\/user/, /^\/checkout/, /^\/my-order/],
  SERVICE_PROVIDER: [
    /^\/service_provider/,
    /^\/profile\/service_provider/,
    /^\/my-services/,
    /^\/service-history/,
    /^\/service-create/,
  ],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `${process.env.NEXT_PUBLIC_URL}/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/user",
    "/user/:path*",
    "/profile/:path*",
    "/dashboard/:path*",
    "/checkout/:path*",
    "/my-services",
    "/service-history",
    "/service-create",
    "/my-order",
  ],
};
