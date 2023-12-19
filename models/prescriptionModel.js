import { Schema, model, models } from "mongoose";

const prescriptionSchema = new Schema(
  {
    photocopy: { type: String, required: true },
    approved: Boolean,
    patient: { type: Schema.Types.ObjectId, ref: "Patient" },
    pharmacyId: { type: Schema.Types.ObjectId, ref: "Pharmacy" },
  },
  {
    timestamps: true,
  }
);

const PrescriptionModel = models.Prescrption || model("Prescrption", prescriptionSchema);

export default PrescriptionModel;
