//@desc  Get All Contacts
//@route 
const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
}



module.exports = {getContact};