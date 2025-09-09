const Booking = require("../model/Bookings");

// Create a new booking
const createBooking = async (bookingData) => {
  const newBooking = new Booking(bookingData);
  return await newBooking.save();
};

// Get a single booking by ID
const getBookingById = async (bookingId) => {
  return await Booking.findById(bookingId)
    .populate("user_id")
    .populate({
      path: "room_id",
      populate: { path: "hotel_id" }
    });
};

// Get all bookings (optionally filtered)
const getAllBookings = async (filters = {}) => {
  return await Booking.find(filters)
    .populate("user_id")
    .populate({
      path: "room_id",
      populate: { path: "hotel_id" }
    });
};

// Update booking status
const updateBookingStatus = async (bookingId, newStatus) => {
  return await Booking.findByIdAndUpdate(
    bookingId,
    { booking_status: newStatus },
    { new: true }
  );
};

// Update payment status
const updatePaymentStatus = async (bookingId, newPaymentStatus) => {
  return await Booking.findByIdAndUpdate(
    bookingId,
    { payment_status: newPaymentStatus },
    { new: true }
  );
};

// Delete booking
const deleteBooking = async (bookingId) => {
  return await Booking.findByIdAndDelete(bookingId);
};

module.exports = {
  createBooking,
  getBookingById,
  getAllBookings,
  updateBookingStatus,
  updatePaymentStatus,
  deleteBooking,
};
