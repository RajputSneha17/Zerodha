import express from "express";
import {holdingController, homeController, orderController, orderHandler, positionController, updateModeHandler, watchlistController, deleteHandle, emailController, userController, profileController, verifyOtpController, sendOtpController, userLoginController, allUserDetailsController} from "../controllers/controllers.js"
const Router = express.Router();
import { upload } from "../config/multerConfig.js";

Router.get("/", homeController);
Router.get("/position", positionController);
Router.get("/holding", holdingController);

Router.get("/watchlist", watchlistController);
Router.get("/newOrder", orderHandler);
Router.post("/newOrder", orderController);
Router.post("/email", emailController);
Router.get("/dashboard", allUserDetailsController);
Router.post("/userDetail", userController);
Router.post("/userDetailLogin", userLoginController);
Router.post("/profile",upload.single("profile"), profileController);
Router.post("/send-otp", sendOtpController);
Router.post("/verify-otp", verifyOtpController);

Router.patch("/updateMode", updateModeHandler)
Router.delete("/deleteOrder", deleteHandle);

export default Router;