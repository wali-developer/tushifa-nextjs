import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const pharmacySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    point_person: { type: String, required: true },
    contact: { type: Number, required: true },
    approved_prescription: [
      {
        drug_name: String,
        drug_quantity: Number,
        price: Number,
      },
    ],
  },
  { timestamps: true }
);

// hash the password before saving
pharmacySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw error;
  }
});

const PharmacyModel = models.Pharmacy || model("Pharmacy", pharmacySchema);

export default PharmacyModel;
