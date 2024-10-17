const express = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
  return res.render("signup", { error: null });
});

router.get('/login', (req, res) => {
  return res.render("login", { error: null });
});

// Routes/staticRouter.js
router.get('/dashboard', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  res.render('home');
});


router.get('/', (req, res) => {
  if (!req.user) {
    return res.redirect("/login");
  }

  return res.render('home');
});

module.exports = router;
