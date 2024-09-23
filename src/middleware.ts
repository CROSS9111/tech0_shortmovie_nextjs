// import { NextResponse, type NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   let response = NextResponse.next({
//     request: {
//       headers: request.headers,
//     },
//   });

//   const path = new URL(request.url).pathname;

//   const user = "test"

//   if (
//     (path === "/" ||
//       path === "/example-page1" ||
//       path === "/example-page2" ||
//       path === "/example-page3" ||
//       path === "/example-page4" ||
//       path === "/example-page5") &&
//     !user
//   ) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return response;
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
// };
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/api/auth/signin', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/upload/:path*',
}
