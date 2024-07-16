const asyncHandler = require
//@desc  Register user
//@route POST api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    res.json({message : "Register the user"});
});

//@desc  Login user
//@route POST api/users/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message : "Login user"});
});

//@desc  current user
//@route POST api/users/current
//@access public
const currentUser = asyncHandler( async (req, res) => {
    res.json({message : "Current user information"});
});

module.exports = { registerUser, loginUser, currentUser };