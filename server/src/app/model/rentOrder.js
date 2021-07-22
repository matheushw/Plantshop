import mongoose from "mongoose";

const RentOrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    pricePerDay: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    startDate: {
      type: Number,
      required: true
    },
    endDate: {
      type: Number,
      required: true
    },
    total: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("RentOrder", RentOrderSchema);