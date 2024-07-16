//@desc  Get All Contacts
//@route Get api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
}

//@desc  Create a Contact
//@route POST api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({message : " Create a contact"});
}

//@desc  Get Contact for id:
//@route Get api/contacts/:id
//@access public
const getContactById = (req, res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`});
}

//@desc  Update Contact
//@route Get api/contacts
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message : "Update Contact"});
}

//@desc  Delete Contact
//@route Get api/contacts
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message : "Update Contact"});
}

module.exports = {getContact, createContact, getContactById, updateContact};