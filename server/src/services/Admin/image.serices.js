const Image = require("../../model/Image");

const createImageDB = async (data) => {
  const newImage = new Image(data);
  return await newImage.save();
};

const getAllImagesDB = async () => {
  return await Image.find().populate("hotel_id");
};

const getImageByIdDB = async (id) => {
  return await Image.findById(id).populate("hotel_id");
};

const getImagesByHotelDB = async (hotel_id) => {
  return await Image.find({ hotel_id });
};

const deleteImageDB = async (id) => {
  return await Image.findByIdAndDelete(id);
};

module.exports = {
  createImageDB,
  getAllImagesDB,
  getImageByIdDB,
  getImagesByHotelDB,
  deleteImageDB,
};
