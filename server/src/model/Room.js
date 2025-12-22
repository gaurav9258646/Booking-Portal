const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
    room_no: { type: String, required: true },
    room_type: { type: String, enum: ["single", "double", "suite", "deluxe"], required: true },
    bed_type: { type: String, enum: ["single", "double", "queen", "king"] },
    max_guests: { type: Number, default: 2 },
    price_per_night: { type: Number, required: true },

    amenities: [String],
    images: [String],

    is_available: { type: Boolean, default: true },
    discount: { type: Number, default: 0 }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Room", roomSchema);
