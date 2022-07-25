// const EventEmitter=require('events')
// const emitter= new EventEmitter();
// emitter.on('hello',()=>{
//     console.log('hello')

// })
// emitter.emit('hello')

const fs = require("fs");
const path = require("path");
console.log("text");
const readfile = fs.readdirSync("./node-app");
readfile.map((a) => {
  let ext = path.extname(a);
  if (ext === ".txt") {
    if (!fs.existsSync("text-folder")) {
      fs.mkdirSync("text-folder");
    }
    fs.renameSync(a, "./text-folder/" + a);
  }

  if (ext === ".js") {
    if (!fs.existsSync("js-folder")) {
      fs.mkdirSync("js-folder");
    }
    fs.renameSync(a, "./js-folder/" + a);
  }
  console.log(ext);
});
console.log(readfile);
