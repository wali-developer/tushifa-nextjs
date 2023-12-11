import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import { NextResponse } from "next/server";

// Create a patient
export const POST = async (req) => {
  const body = await req.json();

  try {
    await startDbConnection();

    const patient = await PatientModel.create({ ...body });

    return NextResponse.json(
      {
        success: true,
        message: `Patient ${body.name} added successfully!`,
        patient: patient,
      },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Get all patients

// Get patient by id
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
