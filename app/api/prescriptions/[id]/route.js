import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

// Get patient by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const prescription = await PrescriptionModel.findById({ _id: id });

    if (!prescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      prescription: prescription,
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

    const updatedPrescription = await PrescriptionModel.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );

    if (!updatedPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      prescription: updatedPrescription,
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

    const deletedPrescription = await PrescriptionModel.findByIdAndDelete(id);

    if (!deletedPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Prescription deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
