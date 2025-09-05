const  {registerUserService}= require("../services/user.services");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerUserService({ name, email, password });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error registering user",      
      error: error.message, 
    });
  }
};
module.exports = { registerUser };
