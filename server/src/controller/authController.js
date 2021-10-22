const User = require('../model/UserEntry');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

module.exports.signup=(req,res,next)=>{
    //destructuring body
    const{name,email,password }=req.body;
    if(!name||!email||!password){
        console.log(name,password,email);
         res.status(400).json({
            msg:'Invalid Feilds'
        });
    }
    User.findOne({email}).then(user=>{
        if(user){
            res.status(400).json({ msg:"user already exist"}) 
        }
        const newUser = new User({name,email,password});
        newUser.save().then(user=>{
            jwt.sign({id:user._id},process.env.JWT_TOKKEN,{expiresIn:3600},(err,token)=>{
                if(err) throw err;
                res.json({
                    token,
                            user: {
                                id: user._id,
                                name: user.name,
                                email: user.email
                            }
                })
            })
        });
    }).catch(err=>{
        next(err);
    });
}



module.exports.login=(req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    if(!email || !password){
        res.status(400).json({msg:'please enter all fields'});
    }
    
    User.findOne({email}).then(user=>{
        if(!user){
            res.status(400).json({msg:'user doesn\'t exist'});
        }
        //validating password
        bcrypt.compare(password,user.password).then(isMatch=>{
            if(!isMatch){
                res.status(400).json({msg:'Invalid password'});
            }
            jwt.sign({id:user._id},process.env.JWT_TOKKEN,{expiresIn:"1h"},(err,token)=>{
                if(err) throw err;
                res.json({
                    token,
                            user: {
                                id: user._id,
                                name: user.name,
                                email: user.email
                            }
                })
            })

        })
    })

}



module.exports.get_user=(req,res)=>{
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
}