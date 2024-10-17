const User = require("../Model/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../Service/auth");

async function createUser(req, res) {
  const { name, email, password } = req.body;

  await User.create({ name, email, password });

  // Redirect to login after user creation
  return res.redirect('/login');
}


async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid email or password" });
  }

  const token = setUser(user);

  res.cookie('Token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000
  });

  return res.json({ success: true });
}


module.exports = {
  createUser,
  loginUser
};
