const jwt = require('jsonwebtoken');

module.exports.tokkenChecker=(req,res,next)=>{
    try {
    const tokken = req.header('x-auth-tokken');
    console.log(tokken)
    if(!tokken){
        res.status(404).json({msg:'no tokken find'});
    }
   
        const decode = jwt.verify(tokken,process.env.JWT_TOKKEN);
        req.user = decode;
        next();
    } catch (error) {
        res.status(400).json({msg:'Token is not valid'});
        next(error);
    }
   
}