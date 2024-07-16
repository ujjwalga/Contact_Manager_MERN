const express = require("express");
const router = express.Router();
const {getContact, createContact, getContactById, updateContact, deleteContact} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getContactById);

router.route("/:id").put();

router.route("/:id").delete((req, res) => {
    res.status(200).json({message : `Delete contact for ${req.params.id}`});
});



module.exports = router;