import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
// Define a custom CORS middleware

export const GET = async () => {
  try {
    const tables = await prisma.table.findMany();

    return new NextResponse(JSON.stringify(tables, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};

