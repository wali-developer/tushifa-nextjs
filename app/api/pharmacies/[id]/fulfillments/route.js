import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PrescriptionModel from "@/models/prescriptionModel";
import saveImage from "@/utils/saveImage";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
  const pharmacyId = params.id;
  try {
    const data = await req.formData();

    const patientId = data.get("patientId");
    const totalAmount = data.get("totalAmount");
    const prescriptionsString = data.get("prescriptions[]");
    const prescriptions = JSON.parse(prescriptionsString);
    const receiptPicture = data.get("receiptPicture");

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
    else if (alreadyFulfilledPrescription.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "The patient prescriptions are already fulfilled",
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

    await startDbConnection();
    const receipt = await saveImage(receiptPicture);

    const fulfillment = new FulfillmentModel({
      pharmacyId,
      patientId,
      prescriptions,
      totalAmount,
      receipt,
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
