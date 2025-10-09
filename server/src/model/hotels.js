const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
   slug: { type: String, unique: true ,required:true},
    address: { type: String, required: true },
    city: { type: String, required: true },
    star_rating: { type: Number, min: 1, max: 5, default: 3 },
    price : {type:String, required: true},

    description: { type: String },
    phone_number: { type: String },
    email: { type: String },
    amenities: {type:String ,required:true},
    images: [String], 

    location: {
      lat: Number,
      lng: Number,
    },

    policies: {
      check_in: { type: String, default: "12:00 PM" },
      check_out: { type: String, default: "11:00 AM" },
      cancellation: { type: String, default: "Free cancellation within 24 hours" },
    },
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("Hotel", hotelSchema);
