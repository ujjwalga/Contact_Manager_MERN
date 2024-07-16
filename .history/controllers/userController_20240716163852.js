const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
//@desc  Register user
//@route POST api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    const {username , email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await UserActivation.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
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