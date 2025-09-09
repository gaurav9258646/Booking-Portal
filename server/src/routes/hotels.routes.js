const express = require("express");
const router = express.Router();
const {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel
} = require("../controllers/hotel.controllers");

// Hotel Routes
router.post("/create", createHotel);        // Create hotel
router.get("/all", getAllHotels);        // Get all hotels (with filters)
router.get("/:id", getHotelById);     // Get hotel by ID
router.put("/:id", updateHotel);      // Update hotel
router.delete("/:id", deleteHotel);   // Delete hotel

module.exports = router;
