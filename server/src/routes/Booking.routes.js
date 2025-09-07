const express = require('express');
const router = express.Router();
const { 
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking
} = require('../controllers/Bookin.controllers');

// Routes
router.post('/create', createBooking);
router.get('/all', getAllBookings);
router.get('/:id', getBookingById);
router.put('/:id/status', updateBookingStatus);
router.delete('/:id', deleteBooking);

module.exports = router;
