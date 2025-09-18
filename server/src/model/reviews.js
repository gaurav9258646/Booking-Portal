const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }, 
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },  
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model("Review", reviewSchema);
