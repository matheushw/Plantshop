import PurchaseOrderGroup from "../model/purchaseOrderGroup.js";
import Product from "../model/product.js";
import mongoose from "mongoose";

class PurchaseOrderGroupController {
  async store(req, res) {
    const productList = [];
    try{
      for (const productOrder of req.body['productsOrders']){
        const product = await Product.findOne({_id: mongoose.Types.ObjectId(productOrder['id'])});
        productList.push(product);
        
        if(product['quantity'] < productOrder['quantity']){
          return res.status(404).send('Produto fora de estoque');
        }
      }

      for (const [index, product] of productList.entries()){
        await Product.findOneAndUpdate(
          {_id: mongoose.Types.ObjectId(product['_id'])}, 
          {quantity: product['quantity'] - req.body['productsOrders'][index]['quantity']}
        );
      }
      
      const data = await PurchaseOrderGroup.create(req.body);
      return res.json(data);
    } catch(error) {
      return res.status(404).send(error);
    }
  }
  
  async index(req, res) {
    const userId = req.query.userId;
    const data = await PurchaseOrderGroup.find({userId: userId});
    return res.json(data);
  }
}

export default new PurchaseOrderGroupController();