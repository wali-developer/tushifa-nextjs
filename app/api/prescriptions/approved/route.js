// Get approved prescription by specific pharmacy endpoint

import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const pharmacyId = req.nextUrl.searchParams.get("pharmacy_id");

  try {
    await startDbConnection();

    const approvedPrescriptions = await PrescriptionModel.find({
      approved: true,
      pharmacyId: pharmacyId,
    }).populate("patient");

    return NextResponse.json({
      success: true,
      prescriptions: approvedPrescriptions,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
