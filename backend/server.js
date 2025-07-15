import express from "express";
import Router from "./routes/Routers.js";
import PositionsModel from "./models/PositionsModel.js";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL;

// app.get("/addPositions", async (req, res) => {
//    const positions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//   positions.forEach((item) => {
//     let newpositions = new PositionsModel({
//       product: String, 
//     name: item.name, 
//     qty: item.qty, 
//     avg: item.avg, 
//     price: item.price, 
//     net: item.net, 
//     day: item.day, 
//     isLoss: item.isLoss,
//     });
//     newpositions.save();
//   });
//   res.send("Done!");
// });

mongoose.connect(uri).then(() => console.log("DB Connected!"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
