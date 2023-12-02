//import mongoose

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

//Add product schema

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    categoryId: {
        type: ObjectId,
        required: true,
        ref: 'categories'
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    rating: {
        type: Number,
        trim: true,
        default: 0
    },
}, { timestamps: true })

//Create model with name products

const Product = mongoose.model('products', productSchema);

module.exports = Product;