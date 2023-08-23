// step 1 : run server
const express =require("express");
require("dotenv").config({path:"./config/.env"});
const connectDB = require('.//config/connectDB');
const contactRouter = require("./router/contactRouter");
//connect Database
connectDB()

// step 2 : run server
const app = express();
//middelware to body parse
app.use(express.json());
//crreate route 
app.use('/api/contact' , contactRouter);


// step 3 : run server
const PORT = process.env.PORT || 4006 ;
// step 4 : run server
app.listen(PORT , (err)=>{
    err ? console.log(err)
    : console.log(`server is runnig on port ${PORT}`)
})
