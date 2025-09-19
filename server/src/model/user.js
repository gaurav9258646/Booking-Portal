const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
   phone:{type:Number,require:true},
  name: { type: String, required: true },
  role: {type: String, enum: ["user", "admin"], default :"user",required: true}
},
{versionKey:false}
);

const User = mongoose.model("User", userSchema);
module.exports = User;