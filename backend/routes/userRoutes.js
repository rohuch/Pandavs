const express = require("express")
const router = express.Router();
const UserController = require('../controllers/userController.js');

// Public route
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)

// private route

module.exports = router;