import { Router } from "express";
import UserController from "./app/controller/userController.js";
import ProductController from "./app/controller/productController.js";
export const routes = Router();

// User routes
routes.get("/user", UserController.index);

routes.post("/user", UserController.store);

// Product routes
routes.get("/product/byId", ProductController.getById);

routes.get("/product/byName", ProductController.getByName);

routes.get("/product/byType", ProductController.getByType);

routes.get("/product", ProductController.getAll);

routes.post("/product", ProductController.store);

routes.post("/product/storeAll", ProductController.storeAll);


export default routes;