
const ProductRouter= require('./Routes/productRoute')



const express =require('express')
const server=express();//cannot create more than once




server.get("/",(req,res)=>res.send("index file"))
server.get('*',(req,res)=>res.send('pagenot found'))
server.use(ProductRouter)//routeused



server.listen(4000)