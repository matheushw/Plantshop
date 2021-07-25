import mongoose from "mongoose";
import PurchaseOrderSchema from "./purchaseOrder.js";

const PurchaseOrderGroupSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    productsOrders: {
      type: [PurchaseOrderSchema],
      required: true
    },
    date: {
      type: String,
      required: true
    },
    total: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("PurchaseOrderGroup", PurchaseOrderGroupSchema);