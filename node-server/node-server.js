const { resolveSoa } = require("dns");
const http = require("http");

// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//   }).listen(8080)

const server = http.createServer((req, res) => {
//   console.log("server running");
//   res.writeHead(200)
//   res.write('res written')
//   res.end()
  console.log(req.url)
  if(req.url==="/test"){
    res.write('test')
    res.end()
  }else if(req.url==="/"){
    res.write  ('index')
    res.end("page")

  }else{
    res.writeHead(404)
    res.write('page not found')
    res.end()
  }
});
server.listen(8080, () => {
  console.log("server started at 8080");

});
