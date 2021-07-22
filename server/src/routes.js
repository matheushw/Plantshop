import { Router } from "express";
import UserController from "./app/controller/userController.js";
import ProductController from "./app/controller/productController.js";
import RentOrderController from "./app/controller/rentOrderController.js";
import PurchaseOrderGroupController from "./app/controller/purchaseOrderGroupController.js";
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

//Rent Order
routes.get("/rentOrders", RentOrderController.index);

routes.post("/rentOrders", RentOrderController.store);

//Purchase Order
routes.get("/purchaseOrderGroup", PurchaseOrderGroupController.index);

routes.post("/purchaseOrderGroup", PurchaseOrderGroupController.store);

export default routes;