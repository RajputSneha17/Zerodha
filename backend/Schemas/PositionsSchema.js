import mongoose from "mongoose";

const PositionsSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  net: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  isLoss: {
    type: Boolean,
    required: true,
  },
});

export default PositionsSchema;
