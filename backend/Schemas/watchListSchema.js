import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    percent: {
        type: String, 
        required: true, 
    },
    isDown: {
        type: Boolean, 
        required: true,
    },
})

export default watchlistSchema;