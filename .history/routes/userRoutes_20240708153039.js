const express = require("express");

const router = express.Router();

router.post("/register", )

router.post("/login", (req, res) => {
    res.json({message : "login user"});
})

router.get("/current", (req, res) => {
    res.json({message : "current user"});
})

module.exports = router;