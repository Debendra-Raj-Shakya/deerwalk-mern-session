let arr = [1, 2, 3, 4, 5];
// let value=5

// arr.indexOf(value)==-1 ? arr.push(value):console.log('exists')
// console.log(arr)

// const a =(value)=>{
//   arr.indexOf(value)==-1 ? arr.push(value):console.log('exists')
//   console.log(arr)
// }

// a(10)

// const months=['jan','march','april', 'june','july'];

// months.splice(5,0,'dec')
// console.log(months)

// months.splice (1,1,'March')
// console.log(months)

// months.splice(3,1)
// console.log(months)

// let arra = [25, 36, 49, 64, 81];
// arra.map((element) => {
//   let a = Math.sqrt(element);
//   console.log(a);
// });

// let arrb = [2, 3, 4, 6, 8];
// const fcn = arrb
//   .map((element) => {
//     return element * 2;
//   })
//   .filter((element) => {
//     return element > 10;
//   });
// console.log(fcn);

// let arr2=[2,3,4,5]
// let aa=
// arr.reduce((prev,element)=>{
//   console.log(prev,"prev")
//   console.log(element,"element/current")
//   return prev+element
// },5)
// console.log(aa)


// let counter=10
// const greet =()=>{
//   console.log(new Date().toLocaleTimeString())
//   counter--
//   if(counter==0){
//     clearInterval(intervalID)
//   }
// }

// const intervalID=setInterval(greet,1000)

const greet=()=>console.log('good morning')
const intervalID=setTimeout(greet,5000)
// clearTimeout((intervalID))