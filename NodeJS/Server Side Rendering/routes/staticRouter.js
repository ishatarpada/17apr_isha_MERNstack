const express = require('express');
const URL = require('../models/url'); // Ensure correct path

const router = express.Router();

router.get('/', async (req, res) => {
  const allURL = await URL.find({});
  return res.render('home', {
    urls: allURL,
  });
});

module.exports = router;
