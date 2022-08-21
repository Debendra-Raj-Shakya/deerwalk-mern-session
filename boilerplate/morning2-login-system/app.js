const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth')
const cookieParser = require('cookie-parser');
const app = express();
const { requireAuth ,checkUser} = require('./middleware/authMiddleware');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs');

// database connection

const dbURI= "mongodb+srv://admin:Password1@devconnector.rcxhefg.mongodb.net/Login?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes

app.use(checkUser)
app.get('/', (req, res) => res.render('home'));

// app.get('/burgers', requireAuth, (req, res) => res.render('burgers'));
app.get('/burgers',requireAuth, (req, res) => res.render('burgers'));
app.use(authRoutes)