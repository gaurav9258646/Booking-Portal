const mongoose = require("mongoose");


const imageSchema = new mongoose.Schema({
       hotel_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    imageurl:{type:String,required: true},
    
});

module.exports = mongoose.model("Image", imageSchema);
 