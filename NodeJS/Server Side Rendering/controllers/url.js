const shortid = require("shortid");
const URL = require("../models/url");
const Swal = require('sweetalert2')

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  // Pass both id and message in a single object
  return res.render("home", {
    id: shortID,
    message: {
      icon: "success",
      title: "URL Shortened!",
      text: "Your URL has been successfully shortened.",
    },
    urls: await URL.find({}) // Pass all URLs to render the list
  });
}


async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
