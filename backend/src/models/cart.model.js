//import mongoose

const mongoose = require('mongoose');

//create schema

const Schema = mongoose.Schema;

//create new cart schema

const cartSchema = new Schema({
    //schema for user with mongoose object id
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    //array of cartItems with mongoose object id
    cartItems: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'products',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        default: 0
    },
})

//create cart model with name cart

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;