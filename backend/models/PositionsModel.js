import mongoose from "mongoose";
import PositionsSchema from "../Schemas/PositionsSchema.js";

const PositionsModel = new mongoose.model("position", PositionsSchema);

export default PositionsModel;