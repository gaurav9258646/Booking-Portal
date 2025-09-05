const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },   
    star_rating: { type: Number, min: 1, max: 5 },
    city: { type: String, required: true }
})

const Hotel = mongoose.model("Hotel", hotelSchema) 

module.exports = Hotel  