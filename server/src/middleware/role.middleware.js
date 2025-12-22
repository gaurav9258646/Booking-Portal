const { verifyToken } = require("../utils");

module.exports = (req,res,next)=>{
    const isvalid = req.headers.authorization?.startsWith("Bearer ");
    if(!isvalid) return res.status(401).json({
        success:false,
        error: "Unathorized",
    })
    try{
        const  token= req.headers.authorization.split(" ")[1];
        const  payload = verifyToken (token);
        if(!payload.id){
            return res.json({
                success: false,
                error: "Invalid token",
            })
        }
        req.user=payload;

    }catch(error){
        console.log(error)
        return res.json({
        success: false,
        error: "Invalid token",
        })
    }
    next()

}