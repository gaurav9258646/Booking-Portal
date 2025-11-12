const {
  createImageDB,
  getAllImagesDB,
  getImageByIdDB,
  getImagesByHotelDB,
  deleteImageDB,
} = require("../../services/Admin/image.serices");

const createImage = async (req, res) => {
  try {
    const data = await createImageDB(req.body);
    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: "Image not created",
    });
  }
};

const getAllImages = async (req, res) => {
  try {
    const data = await getAllImagesDB();
    return res.json({
      success: true,
      message: "All images fetched successfully!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

const getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getImageByIdDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Image not found",
      });
    }
    return res.json({
      success: true,
      message: "Image fetched successfully!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

const getImagesByHotel = async (req, res) => {
  const { hotel_id } = req.params;
  try {
    const data = await getImagesByHotelDB(hotel_id);
    if (!data.length) {
      return res.status(404).json({
        success: false,
        error: "No images found for this hotel",
      });
    }
    return res.json({
      success: true,
      message: "Images fetched successfully!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

// Delete image
const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteImageDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Image not found",
      });
    }
    return res.json({
      success: true,
      message: "Image deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

module.exports = {
  createImage,
  getAllImages,
  getImageById,
  getImagesByHotel,
  deleteImage,
};
