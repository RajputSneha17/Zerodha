import HoldingModel from "../models/HoldingModel.js";
import PositionsModel from "../models/PositionsModel.js";
import OrderModel from "../models/OrderModel.js";
import watchlistModel from "../models/watchListModel.js";
import userModel from "../models/userModel.js";
import nodemailer from 'nodemailer';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
const saltRounds = 10;

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

export const emailController = async (req, res) => {
  const email = req.body.email;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = new userModel({ email });
    await user.save();

    const tempToken = jwt.sign({ email }, process.env.TEMP_SECRET, { expiresIn: "15m" });
    res.json({ token: tempToken });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const userController = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.TEMP_SECRET);
    const email = decoded.email;

    const password = await bcrypt.hash(req.body.password, saltRounds);

    await userModel.findOneAndUpdate(
      { email: email },
      {
        name: req.body.name,
        password: password,
      }
    );

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const userLoginController = async(req, res) => {
  const {name, password} = req.body; 

}

export const profileController = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

    const decoded = jwt.verify(token, process.env.TEMP_SECRET);
    const email = decoded.email;
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.filename; 
    console.log(filePath);
    console.log(req.file);

    await userModel.findOneAndUpdate(
      { email }, 
      { profile: req.file.filename }
    );

    res.status(200).json({ message: "Profile image uploaded successfully", filePath });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error while uploading file" });
  }
};


let currentOtp = null;
export const sendOtpController = async(req, res) => {
  const {email} = req.body;
  currentOtp = Math.floor(100000 + Math.random() * 900000).toString();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email_Id,
      pass: process.env.EMAIL_PASSWORD, 
    },
  });
  const mailOptions = {
    from: process.env.Email_Id,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${currentOtp}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "OTP sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send OTP" });
  }
}

export const verifyOtpController = async(req, res) => {
  const { otp } = req.body;
  if (otp === currentOtp) {
    res.json({ success: true, message: "OTP verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
}

export const allUserDetailsController = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing or malformed" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.TEMP_SECRET); 
    const user = await userModel.findOne({ email: decoded.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      email: user.email,
      name: user.name,
      profile: user.profile,
    });
  } catch (error) {
    console.error("Token error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};
