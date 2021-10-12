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
        const logEntry = new LogEntry(req.body);
        console.log(req.body)
        const newEntry = await logEntry.save();
        res.json(newEntry);
        
    } catch (error) {   
        if(error.name==='ValidationError'){
            res.status(422);
        }
        next(error);
    }
};