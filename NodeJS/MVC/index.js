const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose")

const app = express();
const PORT = 8080;

// import route file
const userRouter = require("./Routes/userRoutes");

const users = require("./data.json");
const { type } = require("os");
const { connectMongoDB } = require("./connection");
const { logReqRes } = require("./Middleware/middleware");

// connection
connectMongoDB("mongodb://localhost:27017/Database").then(() => console.log("connected MongoDB")).catch((err) => console.log("error", err));

// middleware
app.use(logReqRes("log.txt"));

// Middleware Plugins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));