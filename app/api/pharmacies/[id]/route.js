import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PharmacyModel from "@/models/pharmacyModel";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";

// Get pharmacy by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const pharmacy = await PharmacyModel.findById({ _id: id });
    const approvedPrescriptions = await PrescriptionModel.find({
      approved: true,
      pharmacyId: id,
    });
    const pharmacyFulfilments = await FulfillmentModel.find({
      pharmacyId: id,
    });
    const totalFufilments = pharmacyFulfilments.reduce(
      (total, fulfillment) => total + fulfillment.totalAmount,
      0
    );

    if (!pharmacy) {
      return NextResponse.json({ success: false, error: "Pharmacy not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      pharmacy: {
        ...pharmacy.toObject(),
        approvedPrescriptions: approvedPrescriptions,
        pharmacyFulfilments: totalFufilments,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Update pharmacy
export const PUT = async (req, { params }) => {
  const id = params.id;
  const body = await req.json();

  try {
    await startDbConnection();

    const updatedPharmacy = await PharmacyModel.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );

    if (!updatedPharmacy) {
      return NextResponse.json({ success: false, error: "Pharmacy not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Pharmacy ${updatedPharmacy.name} is updated successfully!`,
      pharmacy: updatedPharmacy,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Delete pharmcy
export const DELETE = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const deletedPharmacy = await PharmacyModel.findByIdAndDelete(id);

    if (!deletedPharmacy) {
      return NextResponse.json({ success: false, error: "Pharmacy not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Pharmacy ${deletedPharmacy.name} deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
