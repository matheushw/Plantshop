import mongoose from "mongoose";
import beautifyUnique from "mongoose-beautiful-unique-validation";

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
      required: true,
      unique: [true, 'There is a product with the same name.']
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

ProductSchema.plugin(beautifyUnique);

export default mongoose.model("Product", ProductSchema);