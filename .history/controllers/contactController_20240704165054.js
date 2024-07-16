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
//@route Get api/contacts/
//@access public
const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
}

//@desc  Get All Contacts
//@route Get api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
}



module.exports = {getContact, createContact};