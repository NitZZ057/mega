// import mongoose from "mongoose";


// const orderSchema = new mongoose.Schema({
//   products: [
//     {
//         type: mongoose.ObjectID,
//         ref: "Product"
//       },
//   ],
//   payment: {},
//   buyer: {
//     type: mongoose.ObjectID,
//     ref: "User",
//   },
//   status: {
//     type: String,
//     default: "Not Processed",
//     enum: ["Not Process","Processing","Shipped","deliverd","cancel"]
//   },
  
// },
// {timestamps:true}
// );

// export default mongoose.model("Order", orderSchema);


import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);