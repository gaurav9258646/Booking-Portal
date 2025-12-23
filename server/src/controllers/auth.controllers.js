const bcrypt = require("bcrypt");
const {
  registerUserDB,
  finduserDB,
  getAllusersDB,
} = require("../services/auth.services");
const { generateToken } = require("../utils/index");

const register = async (req, res) => {
  let { name, email, password, phone, role } = req.body;

  if (!name || !email || !password) {
    return res.json({
      success: false,
      error: "All fields are required",
    });
  }

  email = email.toLowerCase();

  try {
    const user = await registerUserDB({
      name,
      email,
      password,
      phone,
      role,
    });

    return res.json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({
        success: false,
        error: "User already exists",
      });
    }

    return res.json({
      success: false,
      error: "Registration failed",
    });
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      error: "All fields are required",
    });
  }

  email = email.toLowerCase();

  try {
    const user = await finduserDB(email);
    if (!user) {
      return res.json({
        success: false,
        error: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        error: "Invalid credentials",
      });
    }

    const { accessToken, refreshToken } = generateToken({
      id: user._id,
      role: user.role,
    });

    const safeUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };

    res.json({
      success: true,
      message: "Login successful",
      data: { user: safeUser, accessToken, refreshToken },
    });
  } catch (error) {
    return res.json({
      success: false,
      error: "Something went wrong",
    });
  }
};

const getusers = async (req, res) => {
  try {
    const users = await getAllusersDB();
    return res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

module.exports = { register, login, getusers };
