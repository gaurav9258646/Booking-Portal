const User = require("../model/user");

const registerUserService = async ({ name, email, password }) => {
  const newUser = new User({ name, email, password });
  return await newUser.save();
};

module.exports = {registerUserService };  
