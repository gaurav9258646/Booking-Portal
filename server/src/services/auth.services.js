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

module.exports={registerUserDB,finduserDB}
