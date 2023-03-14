const express= require('express')
const router= express.Router()
const User= require("../models/Users")
const verify = require('./verifyToken')
// const cryptoJs= require("crypto-js")

///update//
router.put("/:id",verify,async (req,res)=>{
    if(req.user.id===req.params.id||req.user.isAdmin){
        try{
        const updatedUser= await User.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updatedUser)
        }catch(err){
            res.status(500).json(err)
        }
    }
})

///delete//
router.delete("/:id",verify,async (req,res)=>{
    if(req.user.id===req.params.id||req.user.isAdmin){
        try{
              await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user has been deleted")
        }catch(err){
            res.status(500).json(err)
        }
    }
})

////get//
router.get("/find/:id",async (req,res)=>{
    if(req.user.id===req.params.id||req.user.isAdmin){
        try{
            const user=  await User.findById(req.params.id)
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    }
})

/////get all//
// router.get("/",verify,async (req,res)=>{
//     if(req.user.isAdmin){
//         try{
//             const user=  await User.find()
//             res.status(200).json(user)
//         }catch(err){
//             res.status(500).json(err)
//         }
//     }
// })
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed to see all users!");
    }
  });

  ///get user stats//
  router.get("/stats",async(req,res)=>{
     const today= new Date()
     const latYear= today.setFullYear(today.setFullYear-1)       ///it will give the last year//
     const monthsArray=["january","february","march","april","may","june","july","august","september","october","november","december"]
     try{
       const data= await User.aggregate([     //aggregation//
        {
            $project:{
                month:{$month:"$createdAt"}
            }
        }, {
            $group:{
                _id:"$month",
                total:{$sum:1}
            }
        }
    ])
    res.status(200).json(data)
     }catch(err){
      res.status(500).json(err)
     }
  })


module.exports= router