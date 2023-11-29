//create a category model schema with data

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    parentCategory: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    level: {
        type: Number,
        required: true,
    }
})

//create category model with name categories

const Category = mongoose.model('categories', categorySchema);
module.exports = Category;