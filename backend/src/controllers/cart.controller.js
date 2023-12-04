//import user model, utils, jwtProvider

const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const ApiError = require('../utils/ApiError');
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');
const jwtProvider = require('../config/jwtProvider');

const getUserCart = asyncHandler(async (req, res) => {
    if (req.headers.authorization == undefined) {
        throw new ApiError(401, "Unauthorized! Token Required");
    }
    const jwt = req.headers.authorization.split(" ")[1];
    if (!jwt) {
        throw new ApiError(401, "Unauthorized! Token Not Found");
    }
    const userId = await jwtProvider.getUserIDFromToken(jwt);

    const cart = await Cart.findOne({ userId }).populate("cartItems.productId");
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }
    return res.status(200).json(
        new ApiResponse(200, cart, "Success"))
})

const addToCart = asyncHandler(async (req, res) => {

    if (req.headers.authorization == undefined) {
        throw new ApiError(401, "Unauthorized! Token Required");
    }
    const jwt = req.headers.authorization.split(" ")[1];
    if (!jwt) {
        throw new ApiError(401, "Unauthorized! Token Not Found");
    }
    const userId = await jwtProvider.getUserIDFromToken(jwt);

    const productId = req.body.productId;
    const quantity = Number(req.body.quantity);
    let cart = await Cart.findOne({ userId });
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error("Product not found");
    }
    //If cart already exists for user,
    if (cart) {
        const productIndex = cart.cartItems.findIndex((product) => product.productId == productId);
        //check if product exists or not
        if (productIndex > -1) {
            let productItem = cart.cartItems[productIndex];
            productItem.quantity += quantity;
            cart.cartItems[productIndex] = productItem;
            await cart.save();
            res.status(200).json(
                new ApiResponse(200, cart, "Item Added to Cart"));
        } else {
            cart.cartItems.push({ productId, quantity });
            await cart.save();
            res.status(200).json(
                new ApiResponse(200, cart, "New Item Added to Cart"));
        }
    }
    else {
        //no cart exists, create one
        const newCart = new Cart({
            userId,
            cartItems: [{
                productId,
                quantity
            }]
        });
        await newCart.save();
        res.status(201).json(new ApiResponse(201, newCart, "Cart Created, Item Added to Cart"));
    }
})

const updateCart = asyncHandler(async (req, res) => {

    if (req.headers.authorization == undefined) {
        throw new ApiError(401, "Unauthorized! Token Required");
    }
    const jwt = req.headers.authorization.split(" ")[1];
    if (!jwt) {
        throw new ApiError(401, "Unauthorized! Token Not Found");
    }
    const userId = await jwtProvider.getUserIDFromToken(jwt);

    const cartId = req.body._id;
    const productId = req.body.productId;
    const quantity = Number(req.body.quantity);

    let cart = await Cart.findById(cartId);

    const product = await Product.findById(productId);

    if (!product) {
        throw new Error("Product not found");
    }
    //If cart already exists for user,
    if (cart) {

        const productIndex = cart.cartItems.findIndex((product) => product.productId == productId);
        //check if product exists or not
        if (productIndex > -1) {

            console.log("1. product index is: ", productIndex);
            let productItem = cart.cartItems[productIndex];
            productItem.quantity = quantity;
            cart.cartItems[productIndex] = productItem;
            cart.cartItems.splice(productIndex, 1);
            // if (quantity == 0) {
            //     console.log("quantity is :", quantity);
            //     //delete product entry from cart
            //     await cart.deleteOne({ productId })
            //     res.status(200).json(
            //         new ApiResponse(200, cart, "Item Removed From Cart"));
            // }
            // else {
            console.log("2. product index is: ", productIndex);
            console.log("quantity is :", quantity, "still adding");
            await cart.save();
            res.status(200).json(
                new ApiResponse(200, cart, "Item Updated in Cart"));
        } else {
            // if (quantity == 0) {
            //     //delete product entry from cart
            //     await cart.deleteOne({ productId })
            //     res.status(200).json(
            //         new ApiResponse(200, cart, "Item Removed From Cart"));
            // }
            // else {
            console.log("3. product index is: ", productIndex);
            cart.cartItems.push({ productId, quantity });
            console.log("quantity is :", quantity, "still adding problem is here");
            await cart.save();
            res.status(200).json(
                new ApiResponse(200, cart, "New Item Added to Cart"));
        }
        // }
    }
})

const deleteCart = async (req, res) => {
    const owner = req.user._id;
    const itemId = req.query.itemId;
    try {
        let cart = await Cart.findOne({ owner });
        const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);
        if (itemIndex > -1) {
            let item = cart.items[itemIndex];
            cart.bill -= item.quantity * item.price;
            if (cart.bill < 0) {
                cart.bill = 0
            }
            cart.items.splice(itemIndex, 1);
            cart.bill = cart.items.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
            }, 0)
            cart = await cart.save();
            res.status(200).send(cart);
        } else {
            res.status(404).send("item not found");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }

}

//export modules
module.exports = { getUserCart, addToCart, updateCart }