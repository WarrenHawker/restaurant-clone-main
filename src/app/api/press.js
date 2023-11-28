import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";





export const GET = async () => {
  try {
    const presses = await prisma.press.findMany();

    return new NextResponse(JSON.stringify(presses, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};


