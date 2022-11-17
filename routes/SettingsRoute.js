const express = require("express");
const path = require("path");
const router = express.Router();
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));

const { changePass, editProfile, help, manageAccount, updateProfile } = require(path.join(__dirname, "../controllers/SettingsController"))

router.get('/changepass', changePass);
router.get('/editprofile', editProfile);
router.get('/help', help);
router.get('/manageaccount', manageAccount);

router.post('/updateprofile', userAuth, updateProfile);

module.exports = router;