//@desc  Register user
//@route POST api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    res.json({message : "Register the user"});
});

//@desc  Register user
//@route POST api/users/register
//@access public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message : "Login user"});
});

//@desc  Register user
//@route POST api/users/register
//@access public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message : "Login user"});
});

module.exports = { registerUser };