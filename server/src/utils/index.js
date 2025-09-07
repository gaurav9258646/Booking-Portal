const  jwt = require("jsonwebtoken");
const generateToken =(data)=>{
    const accesstoken = jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"30d"});
    const reftoken = jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"30d"});
    return {accesstoken,reftoken}
}
module.exports ={generateToken};