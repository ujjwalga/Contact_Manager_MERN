const express = require("express");

const { registerUser, loginUser, currentUser } = require("../controllers/userController");



router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").post(currentUser);

module.exports = router;