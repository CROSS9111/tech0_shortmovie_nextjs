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

// 認証が不要なパスのリスト
const publicPaths = ['/api/auth/signin', '/signin', '/api/auth/verify']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // 公開パスの場合は、そのまま通す
  if (publicPaths.includes(path)) {
    return NextResponse.next()
  }

  // 認証状態をチェック（ここでは仮のトークンチェックを行っています）
  const token = request.cookies.get('authToken')?.value

  if (!token) {
    // 未認証の場合、サインインページにリダイレクト
    const signinUrl = new URL('/signin', request.url)
    signinUrl.searchParams.set('from', path)
    return NextResponse.redirect(signinUrl)
  }
  // 認証済みの場合、リクエストを続行
  return NextResponse.next()

  // return NextResponse.redirect(new URL('/api/auth/signin', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/generated/:path*',
    '/home/:path*',
    '/upload/:path*',
  ]
}
