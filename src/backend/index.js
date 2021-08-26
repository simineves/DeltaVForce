// Node Modules Import
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Local File imports
const loginRoutes = require('./routes/loginRoute')


//Initializing express function
const app = express();

// Setting up backend port
const port = process.env.PORT || 5000;

//mongodb URI
const uri = process.env.DATABASE_URL;

// To allow cross origin domain
app.use(cors());

//To parse the body
app.use(express.json());

//Connecting to mongoDb
mongoose.connect(uri, { useNewUrlParser: true }).then(()=>{
    console.log("MongoDB database connection established successfully");
}).catch((err)=>console.error(err))

// Starting up the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// When we get post request on signup route
app.post('/signup',loginRoutes.signup)


// When we get post request on login route
app.post('/login', loginRoutes.login)