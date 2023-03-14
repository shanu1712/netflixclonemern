const express= require('express')
const router= express.Router()
const Movie= require("../models/Movie")
const verify = require('./verifyToken')
// const cryptoJs= require("crypto-js")

///create/
router.post("/",verify,async (req,res)=>{
    if(req.user.isAdmin){
         const newMovie= new Movie(req.body)
         try{
           const savedMovie= await newMovie.save()
           res.status(200).json(savedMovie)
         }catch(err){
            res.status(500).json(err)
         }
    }else{
        res.status(403).json("you are not allowed to add movie")
    }
})

///update//
router.put("/:id",verify,async (req,res)=>{
    if(req.user.isAdmin){
         try{
           const updatedMovie= await Movie.findByIdAndUpdate(req.params.id,{
            $set:req.body            ////read about this//

           })
           res.status(200).json(updatedMovie)
         }catch(err){
            res.status(500).json(err)
         }
    }else{
        res.status(403).json("you are not allowed to update movie")
    }
})

///delete//
router.delete("/:id",verify,async (req,res)=>{
    if(req.user.isAdmin){
         try{
           await Movie.findByIdAndDelete(req.params.id)
           res.status(200).json("movie has been deleted")
         }catch(err){
            res.status(500).json(err)
         }
    }else{
        res.status(403).json("you are not allowed to delete movie")
    }
})



////get//
router.get("/find/:id",verify,async (req,res)=>{
    if(req.user.id===req.params.id||req.user.isAdmin){
        try{
            const movie=  await Movie.findById(req.params.id)
            res.status(200).json(movie)
        }catch(err){
            res.status(500).json(err)
        }
    }
})

////get random//
router.get("/random",verify,async (req,res)=>{
    const type=req.query.type
    let movie;
        try{
            if(type==="series"){
               movie=await Movie.aggregate([
                {$match:{isSeries:true}},
                {$sample:{size:1}}
               ])
            }else{
                
               movie=await Movie.aggregate([
                {$match:{isSeries:false}},
                {$sample:{size:1}}
            ])}
            res.status(200).json(movie)
        }catch(err){
            res.status(500).json(err)
        }
    }
)

/////get all//
 router.get("/",verify,async (req,res)=>{
     if(req.user.isAdmin){
         try{
             const movies=  await Movie.find()
             res.status(200).json(movies)
         }catch(err){
             res.status(500).json(err)
         }
     }
 })
// router.get("/", verify, async (req, res) => {
//     const query = req.query.new;
//     if (req.user.isAdmin) {
//       try {
//         const users = query
//           ? await User.find().sort({ _id: -1 }).limit(5)
//           : await User.find();
//         res.status(200).json(users);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(403).json("You are not allowed to see all users!");
//     }
//   });

//   ///get user stats//
//   router.get("/stats",async(req,res)=>{
//      const today= new Date()
//      const latYear= today.setFullYear(today.setFullYear-1)       ///it will give the last year//
//      const monthsArray=["january","february","march","april","may","june","july","august","september","october","november","december"]
//      try{
//        const data= await User.aggregate([     //aggregation//
//         {
//             $project:{
//                 month:{$month:"$createdAt"}
//             }
//         }, {
//             $group:{
//                 _id:"$month",
//                 total:{$sum:1}
//             }
//         }
//     ])
//     res.status(200).json(data)
//      }catch(err){
//       res.status(500).json(err)
//      }
//   })


module.exports= router