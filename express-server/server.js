const { application } = require('express')
const express = require('express')

const quotesData=require('../quotes.json');
const data={
    name:"debendra",
    age:23
}
//1 step: server create garnu paryo 
const server=express()


//3rd step but code chai bich ma lekhne :  code lekhhhnxa
server.get('/',(req,res)=>res.send('hello express'))

server.get('/about',(req,res)=>res.send('about page'))



server.get('/download',(req,res)=>res.download('./server.js'))
server.get('/jsonfile',(req,res)=>{
    // res.sendStatus(200)
   res.json(data)
    res.status(200)
    // res.send(data)
})






const generateRandomNumber=()=>{
    const a =Math.floor( Math.random() *(quotesData.quotes.length -1) +1)
    console.log(a)
    return a
  }
  
  generateRandomNumber()
   server.get('/quotes',(req,res)=>{
    if(req.url==="/quotes"){
        // res.writeHead(200,{"Content-Type": "application/json"})
        const randomQuote=quotesData.quotes[generateRandomNumber()]
        console.log(randomQuote)
        res.json(randomQuote)
        // res.end(JSON.stringify(randomQuote))
      }else{
        res.writeHead(404)
        res.end("pagenot found")
      }
   })
   
   server.get('*',(req,res)=>{
    res.status(404).send("page no found")
})


//2 step: server lai port assign garny paryo


server.listen(4000,()=>console.log("server has started at 4000"))



