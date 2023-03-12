import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  benefits: [
    {
      type: String,
      required: true,
    },
  ],
  caffeinePerScoop: {
    type: Number,
    required: true,
  },
  openLabel: {
    type: Boolean,
    required: true,
  },
  overallRating: {
    type: Number,
    min: 1,
    max: 5,
  },
  tasteRating: {
    type: Number,
    min: 1,
    max: 5,
  },
  description: {
    type: String,
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      helpfulCount: {
        type: Number,
        default: 0,
      },
    },
  ],
});

export default mongoose.model.Product ||
  mongoose.model("Product", productSchema);
