const express = require("express");
const router = express.Router();
const {
  createHotel,
  getAllHotels,
  getHotelBySlug,
  updateHotel,
  deleteHotel
} = require("../../controllers/Admin/hotel.controllers");

router.post("/create", createHotel);     
router.get("/all", getAllHotels);        
router.get("/:slug", getHotelBySlug);    
router.put("/update/:id", updateHotel);  
router.delete("/delete/:id", deleteHotel); 

module.exports = router;
