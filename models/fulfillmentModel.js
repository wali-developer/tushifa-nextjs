import { Schema, model, models } from "mongoose";

const fulfillmentSchema = new Schema({
  pharmacyId: { type: Schema.Types.ObjectId, ref: "Pharmacy", required: true },
  patientId: { type: Schema.Types.ObjectId, required: true },
  totalAmount: { type: Number, required: true },
  receiptPicture: { type: String },
  date: { type: Date, default: Date.now },
  prescriptions: [
    {
      drug_name: String,
      drug_quantity: Number,
      price: Number,
    },
  ],
});

const FulfillmentModel = models.Fulfillment || model("Fulfillment", fulfillmentSchema);

export default FulfillmentModel;
