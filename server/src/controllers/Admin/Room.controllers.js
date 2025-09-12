const {
  createRoomDB,
  getAllRoomsDB,
  getRoomByIdDB,
  getRoomsByHotelSlugDB,
  updateRoomDB,
  deleteRoomDB,
} = require("../../services/Admin/Room.services");

const createRoom = async (req, res) => {
  try {
    const data = await createRoomDB(req.body);
    return res.status(201).json({
      success: true,
      message: "Room created successfully!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: "Room not created",
    });
  }
  
};

const getAllRooms = async (req, res) => {
  try {
    const data = await getAllRoomsDB(req.query);
    return res.json({
      success: true,
      message: "All rooms fetched",
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

const getRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getRoomByIdDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }
    return res.json({
      success: true,
      message: "Room fetched successfully",
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

const getRoomsByHotelSlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const data = await getRoomsByHotelSlugDB(slug);
    if (!data || !data.length) {
      return res.status(404).json({
        success: false,
        error: "No rooms found for this hotel slug",
      });
    }
    return res.json({
      success: true,
      message: "Rooms fetched successfully!",
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

const updateRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await updateRoomDB(id, req.body);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }
    return res.json({
      success: true,
      message: "Room updated successfully!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error:  "Room not updated",
    });
  }
};

const deleteRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteRoomDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }
    return res.json({
      success: true,
      message: "Room deleted successfully!",
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
  createRoom,
  getAllRooms,
  getRoomById,
  getRoomsByHotelSlug,
  updateRoom,
  deleteRoom,
};
