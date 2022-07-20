const fs =require('fs');

// fs.writeFileSync('./hello.js','debendra ')
// fs.appendFileSync('./hello.js','shakya')

//  let data=fs.readFileSync('./hello.js','utf-8')
//  console.log(data)

fs.mkdirSync("node-app")
fs.writeFileSync('./node-app/details.txt',"some text")
fs.appendFileSync('./node-app/details.txt','data added')
let data=fs.readFileSync('./node-app/details.txt','utf-8')
console.log(data)
fs.renameSync("./node-app/details.txt","./node-app/mydetails.txt")

// fs.unlinkSync('./node-app/mydetails.txt')
// fs.rmdirSync('./node-app')