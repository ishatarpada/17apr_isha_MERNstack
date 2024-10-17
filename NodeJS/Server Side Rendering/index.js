const express = require("express");
const mongoose = require('mongoose');
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const URL = require("./models/url");
const path = require("path");
const e = require("express");
const Swal = require('sweetalert2')

const app = express();
const PORT = 8001;

mongoose.connect('mongodb://localhost:27017/short-url', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>
  console.log("Mongodb connected")
);

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRouter);

app.use("/list", async (req, res) => {
  const allURL = await URL.find({});
  return res.render('urlList', {
    urls: allURL,
  });
})

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
