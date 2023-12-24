import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await startDbConnection();

    const patients = (await PatientModel.find()).map((p) => {
      return {
        label: p?.name,
        value: p?._id,
      };
    });

    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
