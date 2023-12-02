const userService = require("../services/user.service");

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization.split(" ")[1];
        if (!jwt) {
            res.status(401).send("Unauthorized! Token Not Found");
        }
        const user = await userService.getUserProfileByToken(jwt);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//export module with getUserProfile and getAllUsers
module.exports = { getUserProfile, getAllUsers }
