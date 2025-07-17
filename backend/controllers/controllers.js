import HoldingModel from "../models/HoldingModel.js";
import PositionsModel from "../models/PositionsModel.js";
import OrderModel from "../models/OrderModel.js";
import watchlistModel from "../models/watchListModel.js";

export const homeController = (req, res) => {
  res.send("working");
};

export const positionController = async (req, res) => {
  const allPositon = await PositionsModel.find({});
  res.json(allPositon);
};

export const holdingController = async (req, res) => {
  const allHolding = await HoldingModel.find({});
  res.json(allHolding);
};

export const orderController = async (req, res) => {
  const order = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  order.save();
};

export const orderHandler = async (req, res) => {
  const allOrder = await OrderModel.find({});
  res.json(allOrder);
};

export const updateModeHandler = async (req, res) => {
  const { id, mode } = req.body;

  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      id,
      { mode },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const watchlistController = async (req, res) => {
  const allwatchlist = await watchlistModel.find({});
  res.json(allwatchlist);
};



export const deleteHandle = async (req, res) => {
  try {
    const { id } = req.body; 

    const deleted = await OrderModel.findByIdAndDelete(id); 

    if (!deleted) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully", deleted });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
