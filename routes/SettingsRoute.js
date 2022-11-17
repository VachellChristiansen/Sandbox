const express = require("express");
const path = require("path");
const router = express.Router();
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));

const { changePass, editProfile, help, manageAccount, updateProfile } = require(path.join(__dirname, "../controllers/SettingsController"))

router.get('/change-pass', changePass);
router.get('/edit-profile', editProfile);
router.get('/help', help);
router.get('/manage-account', manageAccount);

router.post('/update-profile', userAuth, updateProfile);

module.exports = router;