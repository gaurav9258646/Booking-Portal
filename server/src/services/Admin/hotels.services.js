const Hotel = require("../../model/hotels");

const createHotelDB = async (body) => {
  const hotel = new Hotel(body);
  return await hotel.save();
};

const getAllHotelsDB = async () => {
  return await Hotel.find();
};

const getHotelBySlugDB = async (slug) => {
  return await Hotel.findOne({ slug });
};

const updateHotelDB = async (id, body) => {
  return await Hotel.findByIdAndUpdate(id, body, { new: true });
};

const deleteHotelDB = async (id) => {
  return await Hotel.findByIdAndDelete(id);
};

module.exports = {
  createHotelDB,
  getAllHotelsDB,
  getHotelBySlugDB,
  updateHotelDB,
  deleteHotelDB
};
