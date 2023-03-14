const express= require('express')
const router= express.Router()
const User= require('../models/Users')
const jwt=require('jsonwebtoken')

const dotenv= require('dotenv')
dotenv.config()
//register//
router.post('/register',async(req,res)=>{
    const newUser= new User({
        username:req.body.username,
         email:req.body.email,
         password:req.body.password,
    })
    try{

        const user=await newUser.save()
        res.status(200).json(user)
    }catch(err){
       res.status(500).json(err)
    }
})

///login//
router.post("/login",async (req,res)=>{
    try{
        const user= await User.findOne({email:req.body.email})
        !user && res.status(401).json("wrong password or username")
        /////sending token
        const accessToken= jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET_KEY,{expiresIn:"5d"})
        const {password,...info}= user._doc    ///exclude the password sending back on login and just send the rest info
        res.status(200).json({...info,accessToken})
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router