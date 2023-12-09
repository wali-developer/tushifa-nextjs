import startDbConnection from "@/libs/db";
import UserModal from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();

  try {
    await startDbConnection();

    const oldUser = await UserModal.findOne({ email: body.email });
    if (oldUser) {
      return NextResponse.json(
        { success: false, error: "email is already in use!" },
        { status: 422 }
      );
    }

    const user = await UserModal.create({ ...body });

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
