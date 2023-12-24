import { Schema, model, models } from "mongoose";

const patientSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },
    address: { type: String, required: true },
    cnic: {
      cnic_number: { type: Number, required: true },
      photocopy: { type: String },
    },
    attending_physician_name: { type: String, required: true },
    attendant_details: {
      name: String,
      contact: Number,
      relation_to_patient: String,
    },
  },
  {
    timestamps: true,
  }
);

const PatientModel = models.Patient || model("Patient", patientSchema);

export default PatientModel;
