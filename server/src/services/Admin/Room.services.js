const Room = require("../../model/Room");

const  createRoomDB = async (roomData) => {
  const room = new Room(roomData);
  return await room.save();
};

const  getAllRoomsDB  = async () => {
  return await Room.find().populate("hotel","name")
};

const  getRoomByIdDB  = async (id) => {
  return await Room.findById(id).populate("hotel","name");
};

const getRoomsByHotelSlugDB = async (slug) => {
  return await Room.find({ hotel_slug: slug }).populate("hotel", "name");
};

const  deleteRoomDB  = async (id) => {
  return await Room.findByIdAndDelete(id);
};

module.exports = {
  createRoomDB,
  getAllRoomsDB,
  getRoomByIdDB,
  getRoomsByHotelSlugDB,
  deleteRoomDB,
};
