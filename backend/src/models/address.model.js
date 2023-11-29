//import mongoose schema

const mongoose = require('mongoose');

//create schema

const AddressSchema = new mongoose.Schema({
    fistName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    //add schema for user id which is an array and store mongoose schema object id with reference of user
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    mobile: {
        type: String,
        required: true
    },
})
//create address schema with name addresses
const Address = mongoose.model('addresses', Address);
//export module
module.exports = Address;