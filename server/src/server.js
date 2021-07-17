import express, { json } from "express";
import { uri } from "./database/config.js";
import mongoose from "mongoose";
// import  routes from "./routes"
// export const uri = "mongodb://localhost:27017/$seu_banco";
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
  }

  routes() {
    // this.express.use(require("./routes"));
  }
}
export default new App().express;