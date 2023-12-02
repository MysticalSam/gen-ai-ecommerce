//Require Dotenv
require('dotenv').config()
//import express

const express = require('express');

//import cors

const cors = require('cors');

//import routes

// const routes = require('./routes');



//import database

// require('./database');

//create server

const app = express();


//middlewares

app.use(cors());

app.use(express.json());

const authRouter = require('./routes/auth.route');
app.use('/api/v1/auth', authRouter);

const userRouter = require('./routes/user.route');
app.use('/api/v1/user', userRouter);

// const productRouter = require('./routes/product.route');
// app.use('/api/v1/product', productRouter);

//export module app
module.exports = app;

