const mongoose = require('mongoose');

const {Schema} = mongoose;

const string={
    type:String,
    required:true,
}


const logEntrySchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,

    },
    description:string,
    comments:string,
    image:string,
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    latitude:{
        type:Number,
        required:true,
        min:-90,
        max:90
    },
    longitude:{
        type:Number,
        required:true,
        min:-180,
        max:180
    },
    visitDate:{
        type:Date,
        required:true
    }
   
},{
    timestamps:true,
});

const logEntry = mongoose.model('LogEntry',logEntrySchema);
module.exports = logEntry;
