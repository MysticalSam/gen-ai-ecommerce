//Require Dotenv
require('dotenv').config()
//import express
const express = require('express');

//import cors
const cors = require('cors');

//create app via express
const app = express();

//middlewares
//use cors
app.use(cors());
app.use(express.json());

//Routes

const authRouter = require('./routes/auth.route');
app.use('/api/v1/auth', authRouter);

const userRouter = require('./routes/user.route');
app.use('/api/v1/user', userRouter);

const productRouter = require('./routes/product.route');
app.use('/api/v1/products', productRouter);

const cartRouter = require('./routes/cart.route');
app.use('/api/v1/cart', cartRouter);


//export module app
module.exports = app;