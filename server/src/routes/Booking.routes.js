const express = require("express");
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  updatePaymentStatus,
  deleteBooking
} = require("../controllers/Bookin.controllers");

// Booking Routes
router.post("/create", createBooking);                 // Create booking
router.get("/all", getAllBookings);                 // Get all bookings
router.get("/:id", getBookingById);              // Get booking by ID
router.put("/:id/status", updateBookingStatus);  // Update booking status
router.put("/:id/payment", updatePaymentStatus); // Update payment status
router.delete("/:id", deleteBooking);            // Delete booking

module.exports = router;
