const Hotel = require("../model/hotels");

const createHotel = async (hotelData) => {
  const hotel = new Hotel(hotelData);
  return await hotel.save();
};

const getAllHotels = async () => {
  return await Hotel.find();
};


const getHotelById = async (id) => {
  return await Hotel.findById(id);
};

const updateHotel = async (id, hotelData) => {
  return await Hotel.findByIdAndUpdate(id, hotelData, { new: true });
};

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
