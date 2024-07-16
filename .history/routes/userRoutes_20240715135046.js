const express = require("express");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser)

router.post("/login", log)

router.get("/current", (req, res) => {
    res.json({message : "current user"});
})

module.exports = router;