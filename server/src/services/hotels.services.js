const Hotel = require("../model/hotels");

// Create a new hotel
const createHotel = async (hotelData) => {
  const hotel = new Hotel(hotelData);
  return await hotel.save();
};

// Get all hotels (with optional filters)
const getAllHotels = async (filters = {}) => {
  return await Hotel.find(filters);
};

// Get single hotel by ID
const getHotelById = async (id) => {
  return await Hotel.findById(id);
};

// Update hotel
const updateHotel = async (id, hotelData) => {
  return await Hotel.findByIdAndUpdate(id, hotelData, { new: true, runValidators: true });
};

// Delete hotel
const deleteHotel = async (id) => {
  return await Hotel.findByIdAndDelete(id);
};

module.exports = {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
};
