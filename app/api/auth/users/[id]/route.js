import startDbConnection from "@/libs/db";
import UserModal from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const user = await UserModal.findById({ _id: id });

    if (!user) {
      return NextResponse.json({ success: false, error: "user not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: user,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
