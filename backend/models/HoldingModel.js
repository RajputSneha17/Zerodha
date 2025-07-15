import mongoose from "mongoose";
import HoldingSchema from "../Schemas/HoldingSchema.js";

const HoldingModel = new mongoose.model("holding", HoldingSchema);

export default HoldingModel;