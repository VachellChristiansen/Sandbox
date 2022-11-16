const express = require("express");
const path = require("path");
const { celebrate } = require("celebrate");

const userValidator = require(path.join(__dirname, "../validators/UserValidator"));
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));
const { getUser, createUser, loginUser } = require(path.join(__dirname, "../controllers/UserController"));

const router = express.Router();

router.get("/", userAuth, getUser);

router.post("/register", celebrate(userValidator.register), createUser);

router.post("/login", celebrate(userValidator.login), loginUser)

module.exports = router;
