const mongoose= require('mongoose')

const ConnectDb=()=>{
    mongoose.connect("mongodb+srv://admin:Password1@devconnector.rcxhefg.mongodb.net/mernEcommerce?retryWrites=true&w=majority",()=>console.log('db connected'))
}

module.exports = ConnectDb