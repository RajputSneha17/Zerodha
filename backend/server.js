import cors from "cors";
import express from "express";
import Router from "./routes/Routers.js";
import "dotenv/config";
import mongoose from "mongoose";
// import watchlistModel from "./models/watchListModel.js";

const app = express();
const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL;

// app.get("/watchlist", async (req, res) => {
//    const watchlist = [
//   {
//     name: "INFY",
//     price: 1555.45,
//     percent: "-1.60%",
//     isDown: true,
//   },
//   {
//     name: "ONGC",
//     price: 116.8,
//     percent: "-0.09%",
//     isDown: true,
//   },
//   {
//     name: "TCS",
//     price: 3194.8,
//     percent: "-0.25%",
//     isDown: true,
//   },
//   {
//     name: "KPITTECH",
//     price: 266.45,
//     percent: "3.54%",
//     isDown: false,
//   },
//   {
//     name: "QUICKHEAL",
//     price: 308.55,
//     percent: "-0.15%",
//     isDown: true,
//   },
//   {
//     name: "WIPRO",
//     price: 577.75,
//     percent: "0.32%",
//     isDown: false,
//   },
//   {
//     name: "M&M",
//     price: 779.8,
//     percent: "-0.01%",
//     isDown: true,
//   },
//   {
//     name: "RELIANCE",
//     price: 2112.4,
//     percent: "1.44%",
//     isDown: false,
//   },
//   {
//     name: "HUL",
//     price: 512.4,
//     percent: "1.04%",
//     isDown: false,
//   },
// ];
//   watchlist.forEach((item) => {
//     let newwatchlist = new watchlistModel({
//     name: item.name,
//     price: item.price,
//     percent: item.percent,
//     isDown: item.isDown,
//     });
//     newwatchlist.save();
//   });
//   res.send("Done!");
// });

mongoose.connect(uri).then(() => console.log("DB Connected!"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
