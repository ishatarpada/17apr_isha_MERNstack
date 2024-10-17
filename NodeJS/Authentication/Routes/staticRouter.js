const express = require('express');
const URL = require('../Model/url'); // Ensure correct path

const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.user) {
    return res.redirect("/login");
  }

  const allURL = await URL.find({ createdBy: req.user._id });
  return res.render('home', {
    urls: allURL,
  });
});


router.get('/signup', (req, res) => {
  return res.render("signup", { error: null });
});

router.get('/login', (req, res) => {
  return res.render("login", { error: null });
});


module.exports = router;
