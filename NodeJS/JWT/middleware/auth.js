const { getUser } = require("../Service/auth");

async function loggedInUserOnly(req, res, next) {
  const token = req.cookies.Token;

  if (!token) {
    return res.redirect("/login");
  }

  const user = getUser(token);

  if (!user) {
    return res.redirect("/login");
  }

  req.user = user;
  next();
}

function checkAuth(req, res, next) {
  const token = req.cookies.Token;
  if (token) {
    const user = getUser(token);
    if (user) {
      req.user = user;
    }
  }
  next();
}

module.exports = {
  loggedInUserOnly,
  checkAuth
};
