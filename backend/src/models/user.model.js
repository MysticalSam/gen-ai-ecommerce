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
    },
    role:
    {
        type: String,
        required: true,
        default: "customer"
    },
    mobile: {
        type: String
    },
    //create schema for addresses which is an array and store mongoose schema object id with reference of addresses
    addresses:
        [{ type: Schema.Types.ObjectId, ref: 'addresses' }],
}, { timestamps: true })

//create user schema
const User = mongoose.model('users', userSchema);
//export module
module.exports = User;