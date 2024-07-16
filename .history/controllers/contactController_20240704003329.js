const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
}

exports.module = {getContact}