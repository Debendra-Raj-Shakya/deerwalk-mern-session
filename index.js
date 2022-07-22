// const fs =require('fs');

// // fs.writeFileSync('./hello.js','debendra ')
// // fs.appendFileSync('./hello.js','shakya')

// //  let data=fs.readFileSync('./hello.js','utf-8')
// //  console.log(data)

// fs.mkdirSync("node-app")
// fs.writeFileSync('./node-app/details.txt',"some text")
// fs.appendFile('./node-app/details.txts','data added',(err)=>{
//     if(err){
//         console.log(err)
//         return ;
//     }
//     console.log("data written")
// })
// let data=fs.readFileSync('./node-app/details.txt','utf-8')
// console.log(data)
// fs.renameSync("./node-app/details.txt","./node-app/mydetails.txt")

// // fs.unlinkSync('./node-app/mydetails.txt')
// // fs.rmdirSync('./node-app')

// const area =(radius)=>{
//     console.log(3.14 * radius * radius
//     )
//     return 3.14 * radius * radius
// }

// const perimeter =(radius)=>{
//     console.log(2 * 3.14 * radius)
//     return 2 * 3.14 * radius
// }


// area(5)
// perimeter(5)

const area=(a)=>{
    console.log(a**2)
    return a**2
}
const perimeter=(a)=>{
    console.log(4 *a)
 return 4 *a
}
module.exports={area,perimeter}

