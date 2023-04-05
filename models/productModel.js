import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
    // u_id:{
    //   type: mongoose.ObjectId,
    //   ref: "User"
    // },
    // sales:{
    //   type:Number,
    // },
    // rank:{
    //   type:Number,
    // }
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
