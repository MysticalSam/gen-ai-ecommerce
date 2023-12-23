const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/auth.middleware');
const { registerUser,
    loginUser,
    logoutUser,
    changePassword,
    getCurrentUser,
    getUserById,
    getUserByEmail,
    getUserProfileFromToken,
    getAllUsers,
    validateOTP,
    validateForgotToken
} = require('../controllers/user.controller');

router.post('/login', loginUser);
router.post('/otp-verify', validateOTP);
router.post('/verify/:token', validateForgotToken);

// Secured Routes
router.route('/change-password').post(verifyJWT, changePassword);
router.route('/profile').post(verifyJWT, getCurrentUser);
router.route('/logout').post(verifyJWT, logoutUser);

module.exports = router;
