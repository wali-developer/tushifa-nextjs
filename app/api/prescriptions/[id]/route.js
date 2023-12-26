import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import saveImage from "@/utils/saveImage";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Get patient by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const prescription = await PrescriptionModel.findById({ _id: id });

    if (!prescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      prescription: prescription,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Update patient
export const PUT = async (req, { params }) => {
  const id = params.id;

  try {
    const data = await req.formData();

    const photocopy = data.get("photocopy");
    const patient = data.get("patient");

    await startDbConnection();

    const existingPrescription = await PrescriptionModel.findById(id);
    if (!existingPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    const parsedUrl = new URL(existingPrescription.photocopy);
    const imageName = path.basename(parsedUrl.pathname);
    const localPath = path.resolve("upload", imageName);

    try {
      await fs.access(localPath);
      await deleteImage(localPath);
    } catch (error) {
      console.error(`Error accessing image at path ${localPath}:`, error);
    }

    const newPhotocopy = await saveImage(photocopy).catch((error) => {
      console.log(error);
      return existingPrescription?.photocopy;
    });

    const updatedPrescription = await PrescriptionModel.findByIdAndUpdate(
      id,
      {
        $set: {
          photocopy: newPhotocopy,
          patient: patient,
        },
      },
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
      message: "Prescription updated successfully!",
      prescription: updatedPrescription,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Delete patient
export const DELETE = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const deletedPrescription = await PrescriptionModel.findByIdAndDelete(id);

    if (!deletedPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Prescription deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Function to delete an image
const deleteImage = async (path) => {
  try {
    await fs.unlink(path);
  } catch (error) {
    console.error(`Error deleting image at path ${path}:`, error);
    throw error;
  }
};
