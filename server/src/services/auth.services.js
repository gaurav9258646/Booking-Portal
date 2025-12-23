const User = require("../model/user");

const registerUserDB = async ({ name, email, password, phone, role }) => {
  const newUser = new User({
    name,
    email: email.toLowerCase(), 
    password,
    phone,
    role: role || "user",
  });

  await newUser.save();

  return {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    role: newUser.role,
  };
};

const finduserDB = async (email) => {
  return await User.findOne({ email: email.toLowerCase() });
};

const getAllusersDB = async () => {
  try {
    const users = await User.find({}, "name email phone role");
    return users;
  } catch (err) {
    console.log("getAllusersDB error:", err);
    throw err;
  }
};

module.exports = {
  registerUserDB,
  finduserDB,
  getAllusersDB,
};
