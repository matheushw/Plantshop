import User from "../model/user.js";

class UserController {
  async store(req, res) {
    try{
      const data = await User.create(req.query);
      return res.json(data);
    }catch(error){
      return res.status(404).send();
    }
  }

  async edit(req, res) {
    console.log(req.query);
    const _id = req.query._id;
    const name = req.query.name;
    const address = req.query.address;
    const phoneNumber = req.query.phoneNumber;
    const email = req.query.email;
    try {
      const data = await User.findOneAndUpdate(
        {_id}, 
        {name: req.query.name, address: req.query.address, phoneNumber: req.query.phoneNumber, email: req.query.email},
        { upsert: true, new: true }
      );
      return res.json(data);
    } catch(error) {
      return res.status(404).send("Email já cadastrado.");
    }
  }

  async index(req, res) {
    const email = req.query.email;
    const password = req.query.password;
    const data = await User.findOne(
      {
        email: email,
        password: password
      }
    );
    return res.json(data);
  }
}

export default new UserController();