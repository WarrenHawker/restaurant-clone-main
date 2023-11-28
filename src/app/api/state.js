import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";


export const GET = async (req, res) => {
  try {
    const states = await prisma.state.findMany();
    return new NextResponse(JSON.stringify(states, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ mssg: "An error occurred" }, { status: 500 })
    );
  }
};

export const POST = async (req, res) => {
  try {
    const body = await req.json();

    const newStates = await prisma.state.createMany({
      data: body.map((state) => {
        return { name: state.name }; // Assuming your state object has a 'name' property
      }),
    });

    return new NextResponse(JSON.stringify(newStates, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ mssg: "An error occurred" }, { status: 500 })
    );
  }
};

