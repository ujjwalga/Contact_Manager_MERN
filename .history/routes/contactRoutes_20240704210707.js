const express = require("express");
const router = express.Router();
const {getContact, createContact, getContactById, updateContact, deleteContact} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getContactById);

router.route("/:id").put();

router.route("/:id").delete();



module.exports = router;