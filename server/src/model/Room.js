const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  hotel_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Hotel", 
    required: true 
  },
  room_type: { 
    type: String, 
    required: true,
    enum: ["single", "double", "suite", "deluxe"] // example categories
  },
  price_per_night: { 
    type: Number, 
    required: true 
  },
  is_available: { 
    type: Boolean, 
    default: true 
  }
}, { timestamps: true },
{versionKey:false});

module.exports = mongoose.model("Room", roomSchema);
