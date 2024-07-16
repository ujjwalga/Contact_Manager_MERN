const express = require("express");
const router = express.Router();
const {getContact} 

router.route("/").get();

router.route("/").post((req, res) => {
    res.status(200).json({message : " Create a contact"});
});

router.route("/:id").get((req, res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`});
});

router.route("/:id").put((req, res) => {
    res.status(200).json({message : `Update contact for ${req.params.id}`});
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({message : `Delete contact for ${req.params.id}`});
});



module.exports = router;