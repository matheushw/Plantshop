import User from "../model/user.js";

class UserController {
  async store(req, res) {
    const data = await User.create(req.body);
    
    return res.json(data);
  }
  async index(req, res) {
    const email = req.query.email;
    const password = req.query.password;
    const data = await User.find(
      {
        email: email,
        password: password
      }
    );

    return res.json(data[0]);
  }
}

export default new UserController();