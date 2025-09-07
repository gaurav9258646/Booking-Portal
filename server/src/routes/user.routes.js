const express = require("express");
const { registerUser, login} = require("../controllers/user.controllers");

const router = express.Router();

router.post("/login", login);
router.post("/register", registerUser);

module.exports = router;
    