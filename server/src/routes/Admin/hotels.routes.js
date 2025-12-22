const express = require("express");
const role = require("../../middleware/auth.middeware")
const router = express.Router();
const {
  createHotel,
  getAllHotels,
  getHotelBySlug,
  updateHotel,
  deleteHotel
} = require("../../controllers/Admin/hotel.controllers");

router.post("/create",role(["admin"]), createHotel);     
router.get("/all",role(["admin"]), getAllHotels);        
router.get("/:slug",role(["admin"]), getHotelBySlug);    
router.put("/update/:id", role(["admin"]),updateHotel);  
router.delete("/:id", role(["admin"]),deleteHotel); 

module.exports = router;
