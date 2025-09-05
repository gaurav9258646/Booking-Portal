const hotelService = require("../services/hotels.services");

const createHotel = async (req, res) => {
  try {
    const result = await hotelService.createHotel(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllHotels = async (req, res) => {
  try {
    const result = await hotelService.getAllHotels();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHotelById = async (req, res) => {
  try {
    const result = await hotelService.getHotelById(req.params.id);
    if (!result) return res.status(404).json({ error: "Hotel not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHotel = async (req, res) => {
  try {
    const result = await hotelService.updateHotel(req.params.id, req.body);
    if (!result) return res.status(404).json({ error: "Hotel not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const result = await hotelService.deleteHotel(req.params.id);
    if (!result) return res.status(404).json({ error: "Hotel not found" });
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
};
