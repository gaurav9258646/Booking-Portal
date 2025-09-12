const express = require("express");
const router = express.Router();
const {
  createRoom,
  getAllRooms,
  getRoomById,
  getRoomsByHotelSlug,
  updateRoom,
  deleteRoom,
} = require("../../controllers/Admin/Room.controllers");


router.post("/create", createRoom);              
router.get("/all", getAllRooms);                 
router.get("/hotel/:slug", getRoomsByHotelSlug);
router.get("/:id", getRoomById);               
router.put("/:id", updateRoom);                  
router.delete("/:id", deleteRoom);               

module.exports = router;
