import User from "../model/user.js";

class UserController {
  async store(req, res) {
    const data = await User.create(req.body);
    
    return res.json(data);
  }
  async index(req, res) {
    const email = req.params.email;
    const password = req.params.password;
    const data = await User.find(
      {
        email: email,
        password: password
      }
    );

    return res.json(data);
  }
}

export default new UserController();