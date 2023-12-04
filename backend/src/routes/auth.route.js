const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.post('/changepassword', authController.changePassword);
// router.post('/logout', authController.logout);

module.exports = router;