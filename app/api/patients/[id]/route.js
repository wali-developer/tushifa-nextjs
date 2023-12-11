import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import { NextResponse } from "next/server";

// Get patient by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const patient = await PatientModel.findById({ _id: id });

    if (!patient) {
      return NextResponse.json({ success: false, error: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      patient: patient,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Update patient
export const PUT = async (req, { params }) => {
  const id = params.id;
  const body = await req.json();

  try {
    await startDbConnection();

    const updatedPatient = await PatientModel.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );

    if (!updatedPatient) {
      return NextResponse.json({ success: false, error: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({
      patient: updatedPatient,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Delete patient
export const DELETE = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const deletedPatient = await PatientModel.findByIdAndDelete(id);

    if (!deletedPatient) {
      return NextResponse.json({ success: false, error: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Patient ${deletedPatient.name} deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
