import { NextResponse } from "next/server";

export async function GET() {
  try {

    return NextResponse.json({message: "hi"});

  } catch (error) {
    return NextResponse.json({msg: '錯誤', error: error})
  }
}

export async function POST(req: Request) {
    try {
      const body = await req.json();

      return NextResponse.json(body);

    } catch (error) {
      return NextResponse.json({msg: '錯誤', error: error})
    }
}