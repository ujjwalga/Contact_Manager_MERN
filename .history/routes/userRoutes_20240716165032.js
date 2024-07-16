const express = require("express");

const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register").post(registerUser);

router.post("/login").post(loginUser);

router.get("/current").postcurrentUser);

module.exports = router;