const hotelService = require("../services/hotels.services");

// Create hotel
const createHotel = async (req, res) => {
  try {
    const result = await hotelService.createHotel(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all hotels (with filters)
const getAllHotels = async (req, res) => {
  try {
    const result = await hotelService.getAllHotels(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get hotel by ID
const getHotelById = async (req, res) => {
  try {
    const result = await hotelService.getHotelById(req.params.id);
    if (!result) return res.status(404).json({ error: "Hotel not found" });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update hotel
const updateHotel = async (req, res) => {
  try {
    const result = await hotelService.updateHotel(req.params.id, req.body);
    if (!result) return res.status(404).json({ error: "Hotel not found" });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete hotel
const deleteHotel = async (req, res) => {
  try {
    const result = await hotelService.deleteHotel(req.params.id);
    if (!result) return res.status(404).json({ error: "Hotel not found" });
    res.json({ message: "Hotel deleted successfully" });
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
