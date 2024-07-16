//@desc  Get All Contacts
//@route Get api/contact
const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
}



module.exports = {getContact};