const { resolveSoa } = require("dns");
const http = require("http");
const fs =require('fs')
const quotesData=require('../quotes.json');
// console.log(quotesData)
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//   }).listen(8080)

const generateRandomNumber=()=>{
  const a =Math.floor( Math.random() *(quotesData.quotes.length -1) +1)
  console.log(a)
  return a
}

generateRandomNumber()
const server = http.createServer((req, res) => {
  if(req.url==="/quotes"){
    res.writeHead(200,{"Content-Type": "application/json"})
    const randomQuote=quotesData.quotes[generateRandomNumber()]
    console.log(randomQuote)
    res.end(JSON.stringify(randomQuote))
  }else{
    res.writeHead(404)
    res.end("pagenot found")
  }
  // console.log("server running");
  // res.writeHead(200,{"Content-Type": "application/json"})
  // if(req.url==="/quotes"){
  //   const readfile=fs.readFileSync('../quotes.json')
  //   const objquotes=JSON.stringify(readfile)
  //   const arrayobj=[...objquotes]
  //   console.log(arrayobj)
  //   res.end()
  }

  // console.log(req.url)
  // if(req.url==="/test"){
  //   res.write('test')
  //   res.end()
  // }else if(req.url==="/"){
  //   res.write  ('index')
  //   res.end("page")

  // }else{
  //   res.writeHead(404)
  //   res.write('page not found')
  //   res.end()
  // }
// }
);
server.listen(8080, () => {
  console.log("server started at 8080");

});
