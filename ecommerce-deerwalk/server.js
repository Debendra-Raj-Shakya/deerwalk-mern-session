const ProductRouter = require("./Routes/productRoute");
const cors = require("cors");
const productData= require('./data/productData.json')
const express = require("express");
const server = express(); //cannot create more than once

//seup server
server.use(cors());
server.use(express.static(__dirname + "/public"))

//setup server side rendering
server.set("view engine", "hbs");
server.get('/',(req,res)=>res.render("index",{productData}))

// server.get('/css/index.css',(req,res)=>{
//     res.sendFile(__dirname + '/public/css/index.css')
// })


// server.get("/", (req, res) => res.send("index file"));
server.use("/api/products", ProductRouter); //routeused
server.get("*", (req, res) => res.send("pagenot found"));

server.listen(4000);
