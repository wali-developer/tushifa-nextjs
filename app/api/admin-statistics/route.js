import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PharmacyModel from "@/models/pharmacyModel";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";
import PatientModel from "@/models/patientModel";

export const GET = async (req) => {
  try {
    await startDbConnection();

    const totalPharmacies = await PharmacyModel.countDocuments();
    const totalPatients = await PatientModel.countDocuments();
    const totalPrescriptions = await PrescriptionModel.countDocuments();
    const totalInvestment = await FulfillmentModel.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalAmount" },
        },
      },
    ]);

    return NextResponse.json({
      success: true,
      statistics: {
        totalPharmacies,
        totalPatients,
        totalPrescriptions,
        totalInvestment: totalInvestment.length ? totalInvestment[0].totalAmount : 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
