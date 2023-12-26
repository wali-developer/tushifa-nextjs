import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import { NextResponse } from "next/server";

// Get all patients
export const GET = async (req) => {
  const count = req.nextUrl.searchParams.get("count");

  try {
    await startDbConnection();

    const patients = await PatientModel.find().sort({ createdAt: -1 }).limit(count);

    return NextResponse.json({
      success: true,
      data: patients,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
