import Product from "../model/product.js";
//import mongoose from "mongoose";

class ProductController {
  async store(req, res) {
    try{
      const data = await Product.create(req.query);
      return res.json(data);
    }catch(error){
      return res.status(404).send();
    }
  }

  async storeAll(req, res) {
    const data = Product.insertMany(req.body);

    return res.json(data);
  }

  async getByName(req, res) {
    const name = req.query.name;
    const data = await Product.findOne(
      { name }
    );

    return res.json(data);
  }

  async getById(req, res) {
    const id = req.query.id;
    const data = await Product.findOne(
      { id }
    );

    return res.json(data);
  }

  async getByType(req, res) {
    const type = req.query.type;
    const data = await Product.findOne(
      { type }
    );

    return res.json(data);
  }

  async getAll(req, res) {
    const data = await Product.find({});

    return res.json(data);
  }

  async plusQuantity(req, res) {
    const _id = req.query._id;
    const product = await Product.findOne( {_id} );
    const data = await Product.findOneAndUpdate(
      { _id }, 
      { quantity: product['quantity'] + 1 }
    );
    
    return res.json(data);
  }

  async minusQuantity(req, res) {
    const _id = req.query._id;
    const product = await Product.findOne( {_id} );
    const data = await Product.findOneAndUpdate(
      { _id }, 
      { quantity: product['quantity'] - 1 }
    );
    
    return res.json(data);
  }

  async del(req, res) {
    const _id = req.query._id;
    const data = await Product.deleteOne( {_id} );
    return res.json(data);
  }

}

export default new ProductController();