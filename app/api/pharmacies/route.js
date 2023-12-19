import startDbConnection from "@/libs/db";
import PharmacyModel from "@/models/pharmacyModel";
import UserModal from "@/models/userModel";
import { NextResponse } from "next/server";

// Create a pharmacy
export const POST = async (req) => {
  try {
    const body = await req.json();
    await startDbConnection();

    const pharmacyData = {
      ...body,
      approved_prescription: [],
    };

    const pharmacy = await PharmacyModel.create(pharmacyData);

    await UserModal.create({
      email: body.email,
      name: body.name,
      password: body.password,
      role: "pharmacist",
      pharmacyId: pharmacy._id,
    });

    return NextResponse.json({
      success: true,
      message: `Pharmacy ${pharmacy.name} added successfully!`,
      pharmacy: pharmacy,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Get all pharmacies
export const GET = async (req) => {
  try {
    await startDbConnection();

    const pharmaciees = await PharmacyModel.find();

    return NextResponse.json({
      success: true,
      data: pharmaciees,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
