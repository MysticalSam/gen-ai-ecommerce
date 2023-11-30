//import user model

const User = require('../models/user.model');

//JWT Provider

const jwtProvider = require('../config/jwtProvider');

//import bcrypt for password hashing

const bcrypt = require('bcrypt');
const saltRounds = 10;

//import jwt for token generation

const jwt = require('jsonwebtoken');

//Create a async function for user creation with accepting userData in try catch block 

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        //to check if the user already exists in the database
        const isUserExists = await User.findOne({ email });
        if (isUserExists) {
            throw new Error('Email already exists');
        }
        //hash password with bcrypt
        password = await bcrypt.hash(password, saltRounds);

        //create a new user
        const user = await User.create({ firstName, lastName, email, password });
        console.log("created user is: ", user);
        return user;

    } catch (error) {
        res.status(400).send(error);
    }
}

//add a method for find user by id

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        //if no user is found throw an error that user with this id is not found.
        if (!user) {
            throw new Error('User not found with this id: ', userId);
        }
        return user;

    } catch (error) {
        res.status(400).send(error);
    }
}

//add a method for find user by email

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne(email);
        //if no user is found throw an error that user with this email is not found.
        if (!user) {
            throw new Error('User not found with this email: ', email);
        }
        return user;

    } catch (error) {
        res.status(400).send(error);
    }
}

//Get User Profile by JWT Token

const getUserProfileByToken = async (token) => {
    try {
        //get user id from token
        const userId = jwtProvider.getUserIDFromToken(token);
        //find user by id
        const user = await findUserById(userId);
        //if no user is found throw an error that user with this id is not found.
        if (!user) {
            throw new Error('User not found with this id: ', userId);
        }
        //return user
        return user;

    } catch (error) {
        res.status(401).send('Unauthorized');
    }
}


//export module with createUser, findUserById and findUserByEmail
module.exports = { createUser, findUserById, findUserByEmail }