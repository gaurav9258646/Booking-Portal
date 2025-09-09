const express = require("express");
const router = express.Router();
const {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom
} = require("../controllers/Room.controllers");

// Room Routes
router.post("/create", createRoom);       // Create room
router.get("/all", getAllRooms);       // Get all rooms (with filters)
router.get("/:id", getRoomById);    // Get room by ID
router.put("/:id", updateRoom);     // Update room
router.delete("/:id", deleteRoom);  // Delete room

module.exports = router;
