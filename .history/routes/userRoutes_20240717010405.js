const express = require("express");
const router = express.Router();
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const valid
router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").post(validateToken, currentUser);

module.exports = router;