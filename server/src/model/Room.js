const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
  room_type: { type: String, required: true },
  price_per_night: { type: Number, required: true }
});

module.exports = mongoose.model("Room", roomSchema);
