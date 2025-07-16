import express from "express";
import {holdingController, homeController, orderController, orderHandler, positionController, updateModeHandler, watchlistController} from "../controllers/controllers.js"
const Router = express.Router();

Router.get("/", homeController);
Router.get("/position", positionController);
Router.get("/holding", holdingController);

Router.get("/watchlist", watchlistController);
Router.get("/newOrder", orderHandler);
Router.post("/newOrder", orderController);

Router.patch("/updateMode", updateModeHandler)

export default Router;