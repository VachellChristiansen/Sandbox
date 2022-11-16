const express = require("express");
const { celebrate } = require("celebrate");

const userValidator = require("../validators/UserValidator");
const userAuth = require("../middlewares/UserAuth");
const { getUser, createUser, loginUser } = require("../controllers/UserController");

const router = express.Router();

router.get("/", userAuth, getUser);

router.post("/register", celebrate(userValidator.register), createUser);

router.post("/login", celebrate(userValidator.login), loginUser)

module.exports = router;
