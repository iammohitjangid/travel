//express app
const express = require('express');
//console every request in terminal with other info 
const morgan = require('morgan');
//for ensuring security add some extra headers  
const Helmet = require('helmet');
//enable cross origin request 
const cors = require('cors');
//ODM for mongoD
const mongoose = require('mongoose');
//loading middleware
const{ notFound , errorHandler} = require('./middleware/middleware');
//importing files

const user = require('./api/auth');
const log = require('./api/log');
//loading .env file
require('dotenv').config();

//initallizing express app
const app = express();

//connecting to DB here

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true 
}).then((data)=>{
    if(data){
        console.log("Connected successfully");
    }
}).catch(err=>{
    console.log(err);
});

//enabling cors for accepting request from localhost:3000
app.use(cors({
    origin:'http://localhost:3000',

}))
//body parser middleware for accepting json format data 
app.use(express.json());
//initializing morgan --default
app.use(morgan('common'));
//initializing helmet
app.use(Helmet()); 
//code below

//default router
app.get('/', (req,res)=>{
  res.json({
      'message':'hello world'
  })
});
//intializing other routers
app.use('/user',user)
app.use('/api/log',log)

//not found middleware
app.use(notFound);

//new middleware for error
app.use(errorHandler);

//code above 


const port = process.env.PORT||1337;
app.listen(port, () => {
 // eslint-disable-next-line no-console
 console.log(`listening at http://localhost:${port}`);
}
);

