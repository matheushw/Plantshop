import Product from "../model/product.js";

class ProductController {
  async store(req, res) {
    const data = Product.create(req.body);
    
    return res.json(data);
  }

  async storeAll(req, res) {
    const data = Product.insertMany(req.body);

    return res.json(data);
  }

  async getByName(req, res) {
    const name = req.query.name;
    const data = await Product.find(
      { name }
    );

    return res.json(data[0]);
  }

  async getById(req, res) {
    const id = req.query.id;
    const data = await Product.find(
      { id }
    );

    return res.json(data[0]);
  }

  async getByType(req, res) {
    const type = req.query.type;
    const data = await Product.find(
      { type }
    );

    return res.json(data[0]);
  }

  async getAll(req, res) {
    const data = await Product.find({});

    return res.json(data);
  }
}

export default new ProductController();