//@desc  Get All Contacts
//@route GET api/contacts
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
//@route GET api/contacts/:id
//@access public
const getContactById = (req, res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`});
}

//@desc  Update Contact
//@route PUT api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message : `Update contact for ${req.params.id}`});
}

//@desc  Delete Contact
//@route DELETE api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`});
}

module.exports = {getContact, createContact, getContactById, updateContact, deleteContact};