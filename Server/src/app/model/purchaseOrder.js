import mongoose from "mongoose";

const PurchaseOrderSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true
  }
);

export default PurchaseOrderSchema;