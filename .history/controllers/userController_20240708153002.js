//@desc  Register user
//@route POST api/users/register
//@access public
const register = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});