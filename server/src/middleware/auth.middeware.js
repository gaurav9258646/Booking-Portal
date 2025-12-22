module.exports = (allrole)=>{
    return (req,res,next) =>{
        if(!allrole.includes(req.user.role)){
            return  res.status(403).json({
                success: false,
                error: "Access denied",
            })
        }  
        next()
    }

}