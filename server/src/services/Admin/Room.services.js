const Room = require("../../model/Room");

const createRoomDB = async (roomData) => {
  const room = new Room(roomData);
  return await room.save();
};

const getAllRoomsDB = async () => {
  return await Room.find();
};

const getRoomByIdDB = async (id) => {
  return await Room.findById(id);
};

const getRoomsByHotelSlugDB = async (slug) => {
  return await Room.find({ hotel_slug: slug });
};

const updateRoomDB = async (id, updateData) => {
  return await Room.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteRoomDB = async (id) => {
  return await Room.findByIdAndDelete(id);
};

module.exports = {
  createRoomDB,
  getAllRoomsDB,
  getRoomByIdDB,
  getRoomsByHotelSlugDB,
  updateRoomDB,
  deleteRoomDB,
};
