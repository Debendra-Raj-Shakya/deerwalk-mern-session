let count=5;
const Times=()=>{
    let time= new Date().toLocaleTimeString()
    document.getElementById('time').innerHTML=time

    console.log(count)
    console.log(time)
    count--
    if(count===0){
        clearInterval(inter)
        document.getElementById('time').innerHTML=`Time has been stopped at ${time}`
    }

}
const inter=setInterval(Times,1000)



//next day
// let arr=[10,20,30]

// let a=arr[0]
// let b=arr[1]
// let c=arr[2]
// console.log(a)


// let a={
//     movies:{
//         "name":"kgf",
//         "price":1200,
//         "content":"flim",
//     },
//     movies1:{
//         "name":"kgf2",
//         "price":12000,
//         "content":"flim",
//     }
   
// }
// const {movies}=a
// const {name,price}=movies
// // console.log(name)

// const arr=({name,price,...every})=>{
//     console.log(name)
//     console.log(price)
//     console.log(every)
//     const {content}=every
//     console.log(content)
// }
// arr(movies)