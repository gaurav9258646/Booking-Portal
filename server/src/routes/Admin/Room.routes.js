const express = require("express");
const role = require("../../middleware/auth.middeware")
const router = express.Router();
const {
  createRoom,
  getAllRooms,
  getRoomById,
  getRoomsByHotelSlug,
  deleteRoom,
} = require("../../controllers/Admin/Room.controllers");


router.post("/create",role(["admin"]), createRoom);              
router.get("/all",role(["admin"]), getAllRooms);                 
router.get("/hotel/:slug",role(["admin"]), getRoomsByHotelSlug);
router.get("/:id",role(["admin"]), getRoomById);               
router.delete("/:id",role(["admin"]), deleteRoom);               

module.exports = router;
