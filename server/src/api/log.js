const {Router} = require('express');
const LogEntry = require('../model/LogEntery');

const router = Router();
router.get('/',async(req,res,next)=>{
    try {
        const log = await LogEntry.find();
        res.json(log);        
    } catch (error) {
        next(error);
    }
})

router.post('/',async(req,res,next)=>{
    try {
        const logEntry = new LogEntry(req.body);
        const newEntry = await logEntry.save();
        res.json(newEntry);
        
    } catch (error) {   
        if(error.name==='ValidationError'){
            res.status(422);
        }
        next(error);
    }
});
module.exports = router;