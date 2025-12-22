const express = require("express");
const router = express.Router();
const { searchHotels } = require("../../controllers/User/hotelSearch.controllers");

router.get("/", searchHotels);

module.exports = router;
