import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
  const pharmacyId = params.id;
  try {
    await startDbConnection();

    const { patientId, prescriptions, totalAmount, receiptPicture } = await req.json();

    const checkPrescriptionStatus = await PrescriptionModel.find({
      approved: true,
      pharmacyId: pharmacyId,
    });

    const alreadyFulfilledPrescription = await FulfillmentModel.find({ patientId: patientId });

    // If pharmacy is not exist
    if (!pharmacyId) {
      return NextResponse.json(
        {
          success: false,
          message: "Pharmacy not found",
        },
        { status: 404 }
      );
    }

    // if prescription is already fulfilled by a pharmacy
    else if (alreadyFulfilledPrescription) {
      return NextResponse.json(
        {
          success: false,
          message: "This patient prescriptions are already fulfilled",
        },
        { status: 422 }
      );
    }

    // if this pharamcy does not approved the patient prescriptioin
    else if (checkPrescriptionStatus.length == 0) {
      return NextResponse.json(
        {
          success: false,
          message: "The given pharmacy does not approved this patient prescription",
        },
        { status: 422 }
      );
    }

    const fulfillment = new FulfillmentModel({
      pharmacyId,
      patientId,
      prescriptions,
      totalAmount,
      receiptPicture,
    });

    await fulfillment.save();

    return NextResponse.json({
      success: true,
      message: "The Fulfillment is created",
      fulfillment: fulfillment,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
