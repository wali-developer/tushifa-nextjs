import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PharmacyModel from "@/models/pharmacyModel";
import { getEndOfWeek, getStartOfWeek } from "@/utils/dateUtils";
import { NextResponse } from "next/server";
export const config = {
  api: {
    bodyParser: false,
  },
};

export const GET = async (req, { params }) => {
  const pharmacyId = params.id;
  try {
    await startDbConnection();

    // Verify that the pharmacy exists
    const pharmacy = await PharmacyModel.findById(pharmacyId);
    if (!pharmacy) {
      return NextResponse.json(
        { success: false, message: "Pharmacy not found" },
        { status: 404 }
      );
    }

    // Get the start and end dates of the current week
    const startOfWeek = getStartOfWeek(new Date());
    const endOfWeek = getEndOfWeek(new Date());

    // Find all fulfillments for the pharmacy within the current week
    const fulfillments = await FulfillmentModel.find({
      pharmacyId,
      date: { $gte: startOfWeek, $lte: endOfWeek },
    });

    // Calculate the total cost of prescriptions for the week
    const totalCost = fulfillments.reduce((sum, fulfillment) => sum + fulfillment.totalAmount, 0);

    return NextResponse.json({
      success: true,
      message: `Weekly summery of the pharmacy is: ${totalCost}`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
