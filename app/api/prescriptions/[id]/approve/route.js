import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

// Approved prescription endpoint
export const PUT = async (req, { params }) => {
  const id = params.id;

  try {
    const body = await req.json();
    await startDbConnection();

    const foundPrescription = await PrescriptionModel.find({ _id: id });

    if (foundPrescription[0].approved == true) {
      return NextResponse.json({ success: false, error: "Prescription is already approved" });
    }

    const updatedPrescription = await PrescriptionModel.findByIdAndUpdate(
      id,
      { $set: { approved: true, pharmacyId: body.pharmacyId } },
      { new: true }
    );

    if (!updatedPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Prescription approved successfully!",
      prescription: updatedPrescription,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
