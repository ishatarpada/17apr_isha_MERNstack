const User = require("../Model/user")
const URL = require('../Model/url');
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../Service/auth");

async function createUser(req, res) {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  const urls = await URL.find({});

  return res.render("home", { urls, message: null });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password,
  });
  console.log(user);

  if (!user) {
    return res.render('login', {
      error: "Invalid email or Password",
    });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}

module.exports = {
  createUser,
  loginUser
}