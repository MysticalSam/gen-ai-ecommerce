//require jwttoken

const jwt = require("jsonwebtoken");

// Set JWT Secret Key

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

//require user model

const User = require("../models/user.model");

//generate token with userId

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, JWT_SECRET_KEY, {
        expiresIn: "48h",
    });
    return token;
}

//Get User ID from Token

const getUserIDFromToken = (token) => {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return decoded.userId;
}

//export module with generateToken and getUserIDFromToken

module.exports = { generateToken, getUserIDFromToken }