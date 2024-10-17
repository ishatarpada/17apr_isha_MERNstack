const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const mongoose = require('mongoose');
const { connectToMongoDB } = require("./connection");
const { loggedInUserOnly, checkAuth } = require("./middleware/auth")

const urlRoute = require("./Routes/url");
const staticRouter = require("./Routes/staticRouter");
const userRoute = require("./Routes/user");

const URL = require("./Model/url");
const e = require("express");
const Swal = require('sweetalert2')

const app = express();
const PORT = 8001;

mongoose.connect('mongodb://localhost:27017/short-url')
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.error("Mongodb connection error:", err));

app.set('view engine', 'ejs');
app.set("views", path.resolve("./Views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", loggedInUserOnly, urlRoute);
app.use("/", checkAuth, staticRouter);
app.use("/", userRoute);

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
