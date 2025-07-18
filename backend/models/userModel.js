import mongoose from "mongoose";
import userSchema from "../Schemas/userSchema.js";

 const userModel = new mongoose.model("user", userSchema);

 export default userModel;