let object={
    persondetils:{
        "first_name":"debendra",
        "last_name":"shakya",
        "age":3,
        "location":"kathmandud"

    },
    personProfile:{
        'work':"front end",
        'mapp':"google",
        "hello":function a(){
            // console.log(this.work)
            console.log("hello"+ object.persondetils.first_name)
            return 'hello'
        }
    }



}
// console.log(object.personProfile.hello())
// console.log(object.personProfile.sa)


// console.log(globalThis)

// function Person(first_name,last_name,hello){
//     // const obj={}
//     this.name=first_name
//     this.last_name=last_name
//     this.hello=hello;
    
// }

// const person1=new Person(object.persondetils.first_name,object.persondetils.last_name,object.personProfile.hello)
// person1.hello()


// fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=nepal&api_key=b34b1d3084048c33ec1d45bcafbd8c1d&format=json').then((res)=>res.json()).then((data)=>console.log(data))


function a (){
    let clo=4;
    console.log(clo +2)
}
function b(){
    console.log(clo +1)
}

a()
b()
