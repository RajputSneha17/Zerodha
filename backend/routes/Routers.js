import express from "express";
import {homeController} from "../controllers/controllers.js"
const Router = express.Router();

Router.get("/", homeController);

export default Router;