import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import saveImage from "@/utils/saveImage";
import { NextResponse } from "next/server";

// Create a patient
export const POST = async (req) => {
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

    const cnicPhotocopy = await saveImage(photocopy);

    await startDbConnection();

    const patient = await PatientModel.create({
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
    });

    return NextResponse.json(
      {
        success: true,
        message: `Patient ${patient.name} added successfully!`,
        patient: patient,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Get all patients
export const GET = async (req) => {
  try {
    await startDbConnection();

    const patients = await PatientModel.find();

    return NextResponse.json({
      success: true,
      data: patients,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
