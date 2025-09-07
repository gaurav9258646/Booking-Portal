const  {registerUserService, loginDB}= require("../services/user.services");
const { generateToken } = require("../utils");

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

const login = async(req, res) => {
  const {email, password} = req.body;
  if(!email){
    return res.json({
      success:false,
      message:"Email is required!"
    });
  }
  if(!password){
    return res.json({
      success:false,
      message:"Password is required!"
    });
  }
  try {
    const user = await loginDB({email});
    if(!user){
      return res.json({
        success:false,
        message:"User not found!"
      });
    }
  const {accesstoken,reftoken} = generateToken({
    id:user._id,
    name:user.name,
    password:user.password
  })
    return res.json({
      success:true,
      message:"User loggedIn successfully",
      data: {user,accesstoken,reftoken}
    });
  } catch (error) {
    console.log(error||"something went wrong")
  }
}
module.exports = { registerUser, login };
