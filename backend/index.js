const express= require('express')
const app= express()
const mongoose =require('mongoose')
const dotenv= require('dotenv')
const authroute= require('./routes/auth')
const userroute= require('./routes/users')
const movieRoute=require("./routes/movies")
const listRoute= require("./routes/lists")
dotenv.config()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
})

app.use("/api/auth",authroute)

app.use("/api/users",userroute)

app.use("/api/movies", movieRoute)
app.use("/api/lists",listRoute)
 app.listen(8000,()=>{
    console.log('server is running on 8000')
})