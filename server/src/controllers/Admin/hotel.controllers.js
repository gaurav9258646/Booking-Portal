const { 
  createHotelDB, 
  getAllHotelsDB, 
  getHotelBySlugDB, 
  updateHotelDB, 
  deleteHotelDB 
} = require("../../services/Admin/hotels.services");

const { generateSlug } = require("../../utils/index");

const createHotel = async (req, res) => {
  const body = req.body;
  try {
    if (body.name) {
      body.slug = generateSlug(body.name);
    }
    const data = await createHotelDB(body);
    return res.status(201).json({
      success: true,
      message: "Hotel Created",
      data
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: "Hotel already exists"
      });
    }
    return res.status(500).json({
      success: false,
      error: "Hotel not created"
    });
  }
};

const getAllHotels = async (req, res) => {
  try {
    const data = await getAllHotelsDB();
    return res.json({
      success: true,
      message: "All hotels list",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong"
    });
  }
};

const getHotelBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const data = await getHotelBySlugDB(slug);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Hotel not found"
      });
    }
    return res.json({
      success: true,
      message: "Selected hotel",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong"
    });
  }
};

const updateHotel = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    if (body.name) {
      body.slug = generateSlug(body.name);
    }
    const data = await updateHotelDB(id, body);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Hotel not found"
      });
    }
    return res.json({
      success: true,
      message: "Hotel updated",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong"
    });
  }
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteHotelDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Hotel not found"
      });
    }
    return res.json({
      success: true,
      message: "Hotel deleted"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong"
    });
  }
};

module.exports = {
  createHotel,
  getAllHotels,
  getHotelBySlug,
  updateHotel,
  deleteHotel
};
