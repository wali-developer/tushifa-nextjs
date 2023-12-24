import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import saveImage from "@/utils/saveImage";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Get patient by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const patient = await PatientModel.findById({ _id: id });

    if (!patient) {
      return NextResponse.json({ success: false, error: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      patient: patient,
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

    const name = data.get("name");
    const age = data.get("age");
    const gender = data.get("gender");
    const contact = data.get("contact");
    const address = data.get("address");
    const cnic_number = data.get("cnic_number");
    const photocopy = data.get("photocopy");
    const attending_physician_name = data.get("attending_physician_name");
    const attendantName = data.get("attendantName");
    const attendantContact = data.get("attendantContact");
    const attendant_relation_to_patient = data.get("attendant_relation_to_patient");

    await startDbConnection();

    const existingPatient = await PatientModel.findById(id);
    const oldCnicPhotocopyPath = path.resolve(existingPatient.cnic?.photocopy);
    const fileExists = await fs
      .access(oldCnicPhotocopyPath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      await deleteImage(oldCnicPhotocopyPath);
    }

    const cnicPhotocopy = await saveImage(photocopy).catch((error) => {
      return existingPatient.cnic?.photocopy;
    });

    const updatedPatient = await PatientModel.findByIdAndUpdate(
      id,
      {
        $set: {
          name: name,
          age: age,
          gender: gender,
          contact: contact,
          address: address,
          cnic: {
            cnic_number: cnic_number,
            photocopy: cnicPhotocopy,
          },
          attending_physician_name: attending_physician_name,
          attendant_details: {
            name: attendantName,
            contact: attendantContact,
            relation_to_patient: attendant_relation_to_patient,
          },
        },
      },
      { new: true }
    );

    if (!updatedPatient) {
      return NextResponse.json({ success: false, error: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Patient ${updatedPatient.name} updated successfully`,
      patient: updatedPatient,
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

    const deletedPatient = await PatientModel.findByIdAndDelete(id);

    if (!deletedPatient) {
      return NextResponse.json({ success: false, error: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Patient ${deletedPatient.name} deleted successfully`,
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
    console.log(`Deleted image at path: ${path}`);
  } catch (error) {
    console.error(`Error deleting image at path ${path}:`, error);
    throw error;
  }
};
