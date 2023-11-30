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

//get index route and return a message in json with status 200
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Index Page'
    });
})

//Create a get route for login page
app.get('/login', (req, res) => {
    res.send({
        message: 'Welcome to Login Page'
    });
})

//Create a get route for register page
app.get('/register', (req, res) => {
    res.send({
        message: 'Welcome to Register Page'
    });
})

//Create a get route for products page
app.get('/products', (req, res) => {
    res.send({
        message: 'Welcome to Products Page'
    });
})

//Create a get route for cart page
app.get('/cart', (req, res) => {
    res.send({
        message: 'Welcome to Cart Page'
    });
})

//export module app
module.exports = app;

