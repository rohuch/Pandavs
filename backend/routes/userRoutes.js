const express = require("express");
const {
  userDelete,
  userGet,
  getAllUsers,
} = require("../controllers/userController.js");
const router = express.Router();
const UserController = require("../controllers/userController.js");

// Public route
router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);

// private route
router.post("/changepassword", UserController.changeUserPassword);

// delete a user
router.delete("/:id", userDelete);

// get a user
router.get("/:id", userGet);

// get all users
// router.get("/user/users", getAllUsers);

module.exports = router;
