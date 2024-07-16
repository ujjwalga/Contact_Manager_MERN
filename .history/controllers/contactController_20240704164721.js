//@desc  Get All Contacts
//@route Get api/contacts

const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
}



module.exports = {getContact};