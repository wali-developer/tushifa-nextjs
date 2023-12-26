// Get approved prescription by specific pharmacy endpoint

import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const patientId = req.nextUrl.searchParams.get("patient_id");

  try {
    await startDbConnection();

    const prescriptions = await PrescriptionModel.find({
      patient: patientId,
    }).populate("patient");

    return NextResponse.json({
      success: true,
      prescription: prescriptions[0],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
