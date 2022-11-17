const express = require("express");
const path = require("path");
const { celebrate } = require("celebrate");

const userValidator = require(path.join(__dirname, "../validators/UserValidator"));
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));
const { getUser, 
  createUser, 
  loginUser, 
  getOtherUser,
  register,
  loginPage, 
} = require(path.join(__dirname, "../controllers/UserController"));

const router = express.Router();

router.get("/", userAuth, getUser);

router.get("/user", getOtherUser);

router.get("/register", register);

router.get("/login", loginPage);

router.post("/register", celebrate(userValidator.register), createUser);

router.post("/login", celebrate(userValidator.login), loginUser)

module.exports = router;
