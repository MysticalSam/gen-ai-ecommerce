//import user service as userService
const userService = require('../services/user.service');
//import jwt provider from config
const jwtProvider = require('../config/jwtProvider');
const bcrypt = require('bcrypt');

//async function named register with try catch

const register = async (req, res) => {
    try {
        //call register function from userService

        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        //return user
        res.status(200).send({ jwt, message: "Registration Successful" });
    } catch (error) {
        //return error
        res.status(500).send({ error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.getUserByEmail({ email });
        if (!user) {
            res.status(404).send({ error: "User not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).send({ error: "Invalid password" })
        }

        const jwt = jwtProvider.generateToken(user._id);
        
        return res.status(200).send({ jwt, message: "Login Successful" });
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
}

//export module with register and login
module.exports = { register, login }
