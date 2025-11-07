const { registerUserDB, finduserDB, getAllusersDB } = require("../services/auth.services");
const { generateToken } = require("../utils/index");

const register = async (req, res) => {
  const { name, email, password, phone, role } = req.body;

  if (!name || !email || !password || !phone) {
    return res.json({
      success: false,
      error: "All fields are required",
      required: ["name", "email", "password", "phone"],
    });
  }

  try {
    const user = await registerUserDB({ name, email, password, phone, role: role || "user" });
    return res.json({
      success: true,
      data: user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("register error:", error);
    if (error.code === 11000) {
      return res.json({
        success: false,
        error: "User already exists!",
      });
    }
    res.json({
      success: false,
      error: "User registration failed",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    const user = await finduserDB(email);
    if (!user) {
      return res.json({
        success: false,
        error: "User doesn't exist!",
      });
    }

    const { accessToken, refreshToken } = generateToken({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    return res.json({
      success: true,
      message: "User logged in successfully",
      data: { user, accessToken, refreshToken },
    });
  } catch (error) {
    console.log("login error:", error);
    return res.json({
      success: false,
      error: "Something went wrong",
    });
  }
};

const getusers = async (req, res) => {
  try {
    const data = await getAllusersDB();
    return res.json({
      success: true,
      message: "All users list",
      data,
    });
  } catch (error) {
    console.error("getusers error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong on server",
    });
  }
};

module.exports = { register, login, getusers };
