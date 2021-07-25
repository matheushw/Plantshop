import RentOrder from "../model/rentOrder.js";

class RentOrderController {
  async store(req, res) {
    try{
      const data = await RentOrder.insertMany(req.body);
      return res.json(data);
    } catch(error) {
      return res.status(404).send(error);
    }
  }
  
  async index(req, res) {
    const userId = req.query.userId;
    const data = await RentOrder.find({userId: userId});
    return res.json(data);
  }
}

export default new RentOrderController();