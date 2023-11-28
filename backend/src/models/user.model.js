//import mongoose

const mongoose = require('mongoose');

//create schema

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fitstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }})