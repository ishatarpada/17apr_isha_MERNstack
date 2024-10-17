const { getUser } = require("../Service/auth");


async function loggedInUserOnly(req, res, next) {
  const userUid = req.cookies.uid;

  if (!userUid) {
    return res.redirect("/login");
  }
  const user = getUser(userUid);

  if (!user) {
    return res.redirect("/login");
  }

  req.user = user;
  next();
}

function checkAuth(req, res, next) {
  const sessionId = req.cookies.uid;
  if (sessionId) {
    const user = getUser(sessionId);
    if (user) {
      req.user = user;
    }
  }
  next();
}

module.exports = {
  loggedInUserOnly,
  checkAuth
}