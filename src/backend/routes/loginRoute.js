// Module Imports
const router = require('express').Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Local files import
let User = require('../models/user');

const signup = router.post('/signup',async (req,res)=>{
    const saltRounds = 10;
    const {email,username,password} = req.body
    
    // Check if all the required fields are present or not
    if (!(email && password && username)) {
        res.status(400).send("All inputs are required");
      }
    try{
    const salt = await bcrypt.genSalt(saltRounds)
    // Save the hashed password instead of real password
    const hashedPassword = await bcrypt.hash(password , salt)
    //Create a new user object from user class
    const newUser = new User({
                    username: username,
                    email: email,
                    password: hashedPassword
    })
    // Call the save method to save the user
    await newUser.save()
    res.status(200).json("User saved successfully")
    }
    catch(err){
        console.error(err)
        res.status(500).json("Error" + err)
    }
})

const login = router.post('/login',async (req,res)=>{
    const {password , email} = req.body
    const {TOKEN_KEY, TOKEN_EXPIRATION} = process.env
    try{
        // Find if user exists or not
    const selectedUser = await User.findOne({email: email})
    if(!selectedUser)
        res.status(400).send("User not found")
    else{
        // Check if password is right
        const isPasswordRight = await bcrypt.compare(password, selectedUser.password)
        if(!isPasswordRight)
            res.status(400).send("Wrong Password")
        else{
            // Create the token payload
            const tokenPayload = {
                username: selectedUser.username,
                id: selectedUser.id,
                email: selectedUser.email
            }
            // Create a new JWT token
            const token = await jwt.sign(tokenPayload,TOKEN_KEY,{expiresIn: TOKEN_EXPIRATION })
            res.status(200).send(token)
        }
    }
    }
    catch(err){
        console.error(err)
        res.status(500).json("Error" + err)
    }
})


module.exports = {signup , login}