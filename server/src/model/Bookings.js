const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },

  check_in_date: { type: Date, required: true },
  check_out_date: { type: Date, required: true },

  guests: { type: Number, default: 1 },
  total_price: { type: Number, required: true },

  booking_status: { type: String, enum: ["confirmed", "pending", "cancelled"], default: "pending" },
  payment_status: { type: String, enum: ["paid", "unpaid", "refunded"], default: "unpaid" },
  payment_method: { type: String, enum: ["credit_card", "debit_card", "upi", "cash"], default: "upi" },

  special_requests: { type: String }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model("Booking", bookingSchema);
