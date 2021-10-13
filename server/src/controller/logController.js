const LogEntry = require('../model/LogEntery');

module.exports.fetchLocation=async(req,res,next)=>{
    try {
        const log = await LogEntry.find();
        res.json(log);        
    } catch (error) {
        next(error);
    }
};


module.exports.addLocation=async(req,res,next)=>{
    try {
        const data = {...req.body,userId:req.user.id};
        console.log(req.user);
        const logEntry = new LogEntry(data);
        const newEntry = await logEntry.save();
        res.json(newEntry);
        
    } catch (error) {   
        if(error.name==='ValidationError'){
            res.status(422).json({msg:"Invalid feilds "});
        }
        next(error);
    }
};

module.exports.getUserLocations=async(req,res,next)=>{
    try {
        const userId = req.user.id;
        const location = await LogEntry.find({userId});
        res.json(location);
    } catch (error) {
        if(error.name==='ValidationError'){
            res.status(422).json({msg:"Invalid feilds "});
        }
        next(error);
    }
}