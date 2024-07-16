const mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
    username : {
        type : String,
        required : [true, "Please add the username"],
    },
    email : {
        type : String,
        required : [true, "Please add the email address"],
    },
    password : {
        type : String, 
        required : [true, "Please add the password"]
    }
})