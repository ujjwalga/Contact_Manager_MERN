//@desc  Register user
//@route POST api/users/register
//@access public
const registerUser = asyncHandler((req, res) => {
    res.json({message : "Register the user"});
});