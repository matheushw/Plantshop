import User from "../model/user.js";

class UserController {
  async store(req, res) {
    const emailExists = await User.findOne({ email: req.query.email });
    if(emailExists){
      return res.json(emailExists);
    }
    const data = await User.create(req.body);
    console.log(data);
    return res.json(data);
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