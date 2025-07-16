import mongoose from "mongoose";
import OrderSchema from "../Schemas/OrdersSchema.js";

const OrderModel = new mongoose.model("order", OrderSchema);

export default OrderModel;