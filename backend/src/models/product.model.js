//import mongoose

const mongoose = require('mongoose');

//create schema

const Schema = mongoose.Schema;

//Add product schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },    
})

//Create model with name products

const Product = mongoose.model('products', productSchema);

module.exports = Product;