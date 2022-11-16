const express = require("express");
const path = require("path");
const router = express.Router();

const { getIndex } = require(path.join(__dirname, "../controllers/IndexController"));

router.get("/", getIndex);

module.exports = router;
