import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import saveBase64Image from "@/utils/saveBase64Image";
import { NextResponse } from "next/server";

// Create a patient
export const POST = async (req) => {
  const body = await req.json();

  try {
    await startDbConnection();
    const coverImg = await saveBase64Image(body.cnic.photocopy, "cnic-photocopy.jpg");

    const patient = await PatientModel.create({
      ...body,
      cnic: {
        cnic_number: body.cnic.cnic_number,
        photocopy: coverImg,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: `Patient ${patient.name} added successfully!`,
        patient: patient,
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

    const patients = await PatientModel.find();

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
