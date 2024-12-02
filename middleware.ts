import { authenticatedUser } from "@/lib/utilities/authentication/awsServerUtilities";
import { type NextRequest, NextResponse } from "next/server";
import { UserTypes } from "./lib/models/authentication/types";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const user = await authenticatedUser({ request, response });

  const viewMode = request.cookies.get("viewMode")?.value || "modern";
  const viewRoute = viewMode === "classic" ? "/classic" : "/dashboard";
  const oppRoute = viewMode === "classic" ? "/dashboard" : "/classic";

  const isOnProtectedArea = request.nextUrl.pathname.startsWith(viewRoute);
  const isOnAdminArea = request.nextUrl.pathname.startsWith(
    `${viewRoute}/admin`
  );
  const isOnOppositeArea = request.nextUrl.pathname.startsWith(oppRoute);

  if (isOnProtectedArea) {
    if (!user) return NextResponse.redirect(new URL("/login", request.nextUrl));
    if (isOnOppositeArea)
      return NextResponse.redirect(new URL(viewRoute, request.nextUrl));
    if (
      isOnAdminArea &&
      !(
        user.permissions === UserTypes.STATION_MANAGER ||
        user.permissions === UserTypes.MUSIC_DIRECTOR
      )
    )
      return NextResponse.redirect(new URL(viewRoute, request.nextUrl));
    return response;
  } else if (user) {
    return NextResponse.redirect(new URL(viewRoute, request.nextUrl));
  }
}

export const config = {
  /*
   * Match all request paths except for the ones starting with
   */
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
