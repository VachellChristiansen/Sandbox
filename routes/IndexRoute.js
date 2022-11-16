const express = require("express");
const router = express.Router();

const { getIndex } = require("../controllers/IndexController")

router.get("/", getIndex);

module.exports = router;
