const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const { loggedInUserOnly, checkAuth } = require("./middleware/auth");

const userRoute = require("./Routes/user");
const staticRouter = require("./Routes/staticRouter");

const app = express();
const PORT = 8001;

mongoose.connect('mongodb://localhost:27017/short-url')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.set('view engine', 'ejs');
app.set("views", path.resolve("./Views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", checkAuth, staticRouter);
app.use("/", userRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
