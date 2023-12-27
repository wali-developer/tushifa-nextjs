// Get approved prescription by specific pharmacy endpoint

import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const patientId = req.nextUrl.searchParams.get("patient_id");

  try {
    await startDbConnection();
    const fulfillments = await FulfillmentModel.find({ patientId: patientId });

    const prescriptions = await PrescriptionModel.find({
      patient: patientId,
    })
      .populate("patient")
      .populate("pharmacyId");

    return NextResponse.json({
      success: true,
      prescription: {
        ...prescriptions[0].toObject(),
        fulfillment: fulfillments[0] ? true : false,
        totalAmount: fulfillments[0] ? fulfillments[0].totalAmount : null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
