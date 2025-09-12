const  {registerUserService, loginDB}= require("../services/auth.services");
const { generateToken } = require("../utils");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
      return res.json({
        success:false,
        error:"All field are required"
      });
    }
    const user = await registerUserService({ name, email, password });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    if(error.code===11000){
      return res.json({
        success:false,
        error:"Already User Exists"
      });
    }
    res.status(500).json({ 
     success:false,
     error:"registration faield" 
    });
  }
};

const login = async(req, res) => {
  const {email} = req.body;
  // if(!email || !password){
  //   return res.json({
  //     success:false,
  //     message:"Email is required!"
  //   });
  // }
  // if(!password){
  //   return res.json({
  //     success:false,
  //     message:"Password is required!"
  //   });
  // }
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
    console.log(error);
    return res.json({
      success:false,
      error:"login failed"
    })
  }
}
module.exports = { registerUser, login };
