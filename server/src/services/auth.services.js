const User = require("../model/user");

const registerUserDB=async({name,email,password,phone,role})=>{
    const newuser= new User({name,email,password,phone,role:role||"user"});
     await newuser.save();
     return newuser;
};

const finduserDB=async(email)=>{
    const user= await User.findOne({email});
        return user;
}
const getAllusersDB = async () => {
  try {
    const users = await User.find({}, "name email phone password");
    return users;
  } catch (err) {
    console.log("getAllusersDB error:", err);
    throw err;
  }
};


module.exports={registerUserDB,finduserDB,getAllusersDB}
