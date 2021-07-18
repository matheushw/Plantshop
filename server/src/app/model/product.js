import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    img: {
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
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Product", ProductSchema);