// 攔截器

import { NextResponse } from "next/server";

export function middleware() {
  // const token = req.cookies.get("auth-token");
  console.log('callApi喔')
  // if (!token) {
  //   return NextResponse.redirect("/login");
  // }

  return NextResponse.next(); // 繼續處理請求
}

export const config = {
  matcher: '/api/:path*', // 攔截所有路徑
};