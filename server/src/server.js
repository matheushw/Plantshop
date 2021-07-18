import express, { json } from "express";
import { uri } from "./database/config.js";
import mongoose from "mongoose";
import { routes } from "./routes.js";
import cors from "cors";
class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001 `)
    );
  }

  database() {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  middlewares() {
    this.express.use(json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }


}
export default new App().express;