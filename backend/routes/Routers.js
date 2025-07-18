import express from "express";
import {holdingController, homeController, orderController, orderHandler, positionController, updateModeHandler, watchlistController, deleteHandle, emailController, userController, profileController} from "../controllers/controllers.js"
const Router = express.Router();

Router.get("/", homeController);
Router.get("/position", positionController);
Router.get("/holding", holdingController);

Router.get("/watchlist", watchlistController);
Router.get("/newOrder", orderHandler);
Router.post("/newOrder", orderController);
Router.post("/email", emailController);
Router.post("/userDetail", userController);
Router.post("/profile", profileController);

Router.patch("/updateMode", updateModeHandler)
Router.delete("/deleteOrder", deleteHandle);

export default Router;