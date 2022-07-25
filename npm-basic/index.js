import chalk  from 'chalk'
import validator from 'validator';

// console.log(chalk.italic('hello world'))
// console.log(validator.isEmail('foobar.com'))


// let d=new Date().getMinutes
// let date=validator.isDate(new Date())
// console.log(date)

// let isempty=validator.isEmpty("   ")
// console.log(isempty)

// let hash=validator.isHash("md4asfdasdfasdf",'tiger128')
// console.log('hash',hash)

let url=validator.isURL("https://www.npmjs.com/package/validator")
console.log(url)