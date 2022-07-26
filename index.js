

const data={
  name:"debendra",
  age:25,
  
}
let jsonData=JSON.stringify(data)

console.log(jsonData)
console.log(typeof jsonData)
let objectData=JSON.parse(jsonData)
console.log(  objectData)
console.log( typeof objectData)