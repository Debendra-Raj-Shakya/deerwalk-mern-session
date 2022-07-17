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