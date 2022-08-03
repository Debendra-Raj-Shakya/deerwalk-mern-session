
const ProductRouter= require('./Routes/productRoute')



const express =require('express')
const server=express();//cannot create more than once




server.get("/",(req,res)=>res.send("index file"))
server.use("/api/products",ProductRouter)//routeused
server.get('*',(req,res)=>res.send('pagenot found'))



server.listen(4000)