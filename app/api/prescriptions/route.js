import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import saveImage from "@/utils/saveImage";
import { NextResponse } from "next/server";

// Create a patient
export const POST = async (req) => {
  try {
    const data = await req.formData();

    const photocopy = data.get("photocopy");
    const patient = data.get("patient");
    const prescriptionPhotocopy = await saveImage(photocopy);

    await startDbConnection();

    const prescription = await PrescriptionModel.create({
      photocopy: prescriptionPhotocopy,
      patient: patient,
    });

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
    const prescriptions = await PrescriptionModel.find().populate("patient");

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
