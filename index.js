// // let mul =7;

// // for (let i=1;i<10;i++){
// //     // console.lo
// //     result=i * mul
// //     console.log(`${i} *  ${mul} = ${result}`)
// // }
// // // let j=0
// // while(j<10){
// //     result=j * mul
// //     console.log(`${j} *  ${mul} = ${result}`)
// //     j++;
// // }
// // let k = 1;
// // do {
// //     console.log('first')
// //   result = k * mul;
// //   console.log(`${k} *  ${mul} = ${result}`);
// //   k++;
// // } while (k <= 10);

// const a=(id=1)=>{
//     for (let i=1;i<=10;i++){
//         // console.lo
//         result=i * id
//         console.log(`${i} *  ${id} = ${result}`)
//     }
// }
// a(10)

// const nameaaaa=(names='deben')=>console.log(`good morinign ${names}`)
// nameaaaa('abiskar')


const letters=['a','b','c','d']

letters.push('e')
letters.push('f')

console.log(letters)

// for(i=0; i<letters.length;i++){
//     console.log(letters[i])
// }

// for (letter in letters){
//     console.log(letters[letter])
// }
// for(letter of letters){
//     console.log(letter)
// }

letters.forEach( (element,index,array)=>{
    console.log(element)
    console.log(index)
    console.log(array)
})

