import startDbConnection from "@/libs/db";
import PharmacyModel from "@/models/pharmacyModel";
import { NextResponse } from "next/server";

// Get pharmacy by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const pharmacy = await PharmacyModel.findById({ _id: id });

    if (!pharmacy) {
      return NextResponse.json({ success: false, error: "Pharmacy not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      pharmacy: pharmacy,
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
