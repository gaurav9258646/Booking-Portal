const Room = require('../model/Room');

// Create room
const createRoom = async (roomData) => {
  const room = new Room(roomData);
  return await room.save();
};

// Get all rooms
const getAllRooms = async (filters = {}) => {
  return await Room.find(filters).populate("hotel_id");
};

// Get room by ID
const getRoomById = async (id) => {
  return await Room.findById(id).populate("hotel_id");
};

// Update room
const updateRoom = async (id, updateData) => {
  return await Room.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

// Delete room
const deleteRoom = async (id) => {
  return await Room.findByIdAndDelete(id);
};

module.exports = {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom
};
