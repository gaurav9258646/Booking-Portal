const express = require("express");
const router = express.Router();
const {
  createBooking,
  allBooking,
  bookingById,
  updateBooking,
  deleteBooking,
} = require("../controllers/Bookin.controllers");

router.post("/create", createBooking);                 
router.get("/all", allBooking);                 
router.get("/:id", bookingById);              
router.put("/:id/status", updateBooking);
// router.put("/:id/payment", updatePaymentStatus); 
router.delete("/:id", deleteBooking);            

module.exports = router;
