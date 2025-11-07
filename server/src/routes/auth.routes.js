const express = require("express");
const { register, login,getusers} = require("../controllers/auth.controllers");

const router = express.Router();
router.get("/all",getusers);       
router.post("/register",register);
router.post("/login",login);

module.exports=router;
    