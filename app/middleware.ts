// 攔截器

import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const token = req.cookies.get("auth-token");
  console.log('callApi喔', req)
  // if (!token) {
  //   return NextResponse.redirect("/login");
  // }

  return NextResponse.next(); // 繼續處理請求
}