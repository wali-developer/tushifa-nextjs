import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

// Create a patient
export const POST = async (req) => {
  try {
    const body = await req.json();
    await startDbConnection();

    const prescription = await PrescriptionModel.create({ ...body });

    return NextResponse.json(
      {
        success: true,
        message: `Prescription added successfully!`,
        prescription: prescription,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Get all patients
export const GET = async (req) => {
  try {
    await startDbConnection();

    const prescriptions = await PrescriptionModel.find();

    return NextResponse.json({
      success: true,
      data: prescriptions,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
