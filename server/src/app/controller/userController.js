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