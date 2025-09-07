const Booking = require('../model/Bookings');

// Create a new booking
const createBooking = async (bookingData) => {
  const newBooking = new Booking(bookingData);
  return await newBooking.save();
};

// Get a single booking by ID
const getBookingById = async (bookingId) => {
  const booking = await Booking.findById(bookingId)
    .populate('user_id')
    .populate('room_id');
  return booking;
};

// Get all bookings (optionally filtered)
const getAllBookings = async (filters = {}) => {
  return await Booking.find(filters)
    .populate('user_id')
    .populate('room_id');
};

// Update a booking's status
const updateBookingStatus = async (bookingId, newStatus) => {
  return await Booking.findByIdAndUpdate(
    bookingId,
    { booking_status: newStatus },
    { new: true }
  );
};

// Delete a booking
const deleteBooking = async (bookingId) => {
  return await Booking.findByIdAndDelete(bookingId);
};

module.exports = {
  createBooking,
  getBookingById,
  getAllBookings,
  updateBookingStatus,
  deleteBooking
};
