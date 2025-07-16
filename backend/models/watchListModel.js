import watchlistSchema from "../Schemas/watchListSchema.js";
import mongoose from "mongoose";

const watchlistModel = new mongoose.model("watchlist", watchlistSchema);

export default watchlistModel;