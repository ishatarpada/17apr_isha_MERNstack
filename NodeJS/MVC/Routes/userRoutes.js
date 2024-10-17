const express = require("express");
const router = express.Router();
const { allData, showData, storeData, updateData, deleteData } = require("../Controller/userController")

router.get("/", allData);

router.post("/", storeData);

router.get("/:id", showData);

router.patch("/:id", updateData);

router.delete("/:id", deleteData);

module.exports = router;