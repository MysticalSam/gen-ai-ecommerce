//import mongoose

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        minLength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('password must not contain word password')
            }
        },
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
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
        [{
            addressId: {
                type: ObjectId,
                ref: 'addresses'
            }
        }],
}, { timestamps: true })

//create user schema
const User = mongoose.model('users', userSchema);
//export module
module.exports = User;