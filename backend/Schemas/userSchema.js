import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String, 
    profile: String,
})

export default userSchema;