import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    unique: true,
    required: true,
  },
    name: String,
    password: String, 
    profile: String,
})

export default userSchema;