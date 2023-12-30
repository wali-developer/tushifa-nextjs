// pages/api/pharmacies/[id]/statistics.js

import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const pharmacyId = params.id;

  try {
    await startDbConnection();

    // Get total approved prescriptions for the pharmacy
    const totalApprovedPrescriptions = await PrescriptionModel.countDocuments({
      approved: true,
      pharmacyId: pharmacyId,
    });

    // Get total fulfillments and total amount for the pharmacy
    const pharmacyFulfillments = await FulfillmentModel.find({
      pharmacyId: pharmacyId,
    });
    const totalFulfillments = pharmacyFulfillments.length;
    const totalFulfillmentAmount = pharmacyFulfillments.reduce(
      (total, fulfillment) => total + fulfillment.totalAmount,
      0
    );

    // Get weekly summary (assuming fulfillment has a date property)
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const weeklySummary = await FulfillmentModel.aggregate([
      {
        $match: {
          pharmacyId: pharmacyId,
          date: { $gte: oneWeekAgo },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalAmount" },
          totalFulfillments: { $sum: 1 },
        },
      },
    ]);

    return NextResponse.json({
      success: true,
      statistics: {
        totalApprovedPrescriptions,
        totalFulfillments,
        totalFulfillmentAmount,
        weeklySummary: weeklySummary[0] || { totalAmount: 0, totalFulfillments: 0 },
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
