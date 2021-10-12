const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail} = require('validator');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
 
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,'Please Enter a valid Email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,"Please Enter a valid Email"]
    },
    password:{
        type:String,
        required:[true,'Please Enter a Valid Password'],
        minlength:[6,'Minium length must be 6 characters']
    },
    register:{
        type:Date,
        default:Date.now()
    }
});

UserSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });



module.exports = User = mongoose.model('user',UserSchema);
