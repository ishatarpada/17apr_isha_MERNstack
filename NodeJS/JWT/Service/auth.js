const jwt = require("jsonwebtoken");
const secretKey = '9i6s5h7a@';

function setUser(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
}


function getUser(token) {
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser
};
