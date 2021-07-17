import { Router } from "express";
import UserController from "./app/controller/userController.js";
export const routes = Router();

routes.get("/:email/:password", UserController.index);

routes.post("/", UserController.store);

export default routes;