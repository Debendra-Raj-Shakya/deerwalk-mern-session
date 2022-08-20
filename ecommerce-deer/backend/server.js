const ProductRouter = require("./Routes/productRoute");
const cors = require("cors");
const productData= require('./data/productData.json')
const express = require("express");
const server = express(); //cannot create more than once
const mongoose=require('mongoose')
const connectDb=require('./database/connection')
// const db= "mongodb+srv://admin:Password1@devconnector.rcxhefg.mongodb.net/deerwalkMern?retryWrites=true&w=majority"

// mongoose.connect(db,()=>console.log('database connected'))
connectDb();
//seup server
server.use(cors());
server.use(express.static(__dirname + "/public"))

//setup server side rendering
server.set("view engine", "hbs");
server.get('/',(req,res)=>res.render("index",{productData}))
server.get('/:productID',ProductRouter)

// server.get('/css/index.css',(req,res)=>{
//     res.sendFile(__dirname + '/public/css/index.css')
// })


// server.get("/", (req, res) => res.send("index file"));
server.use("/api/products", ProductRouter); //routeused
server.get("*", (req, res) => res.send("pagenot found"));

server.listen(4000);
