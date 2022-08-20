const User = require('../models/User');

const returnSignupPage = (req, res) => {
    res.render('signup')
}

const returnLoginPage = (req, res) => {

    res.render('login')
}

const createUser = async (req, res) => {
try{
    const user =new User(req.body);
    await user.save();
    res.send(user)
}catch(err){
    console.log(err)
    res.send(err)
}
}

const loginUser = (req, res) => {
    // res.send("/login")
}

const logoutUser = (req, res) => {
    
}

module.exports = {
    returnSignupPage,
    returnLoginPage,
    createUser,
    loginUser,
    logoutUser
}