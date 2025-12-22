const { 
  createbookingDB,
  getAllBookingDB,
  getbookingbyidDB,
  updatabookingDB,
  deletebookingDB 
} = require("../services/Booking.services");

const createBooking = async (req, res) => {
  try {
    const data = await createbookingDB(req.body);
    return res.status(201).json({
      success: true,
      message: "Booking created successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      error: "Booking not created",
    });
  }
};

const allBooking = async (req, res) => {
  try {
    const data = await getAllBookingDB();
    return res.json({
      success: true,
      message: "All booking list",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const bookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getbookingbyidDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Booking not found",
      });
    }
    return res.json({
      success: true,
      message: "Booking found",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

const updateBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await updatabookingDB(id, req.body);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Booking not found",
      });
    }
    return res.json({
      success: true,
      message: "Booking updated successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      error: "Booking not updated",
    });
  }
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deletebookingDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Booking not found",
      });
    }
    return res.json({
      success: true,
      message: "Booking deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

module.exports = {
  createBooking,
  allBooking,
  bookingById,
  updateBooking,
  deleteBooking,
};
