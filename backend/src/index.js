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

//export module app
module.exports = app;

