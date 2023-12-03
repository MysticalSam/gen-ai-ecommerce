//import jwt provider from config
const jwtProvider = require('../config/jwtProvider');
const bcrypt = require('bcrypt');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const ApiResponse = require('../utils/ApiResponse');
const User = require('../models/user.model');

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);
    //if no user is found throw an error that user with this email is not found.
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Password");
    }

    const jwt = jwtProvider.generateToken(user);

    return res.status(200).json(
        new ApiResponse(200, { jwt, user }, "Login Successful")
    )
})

//export module with register and login
module.exports = { login }
