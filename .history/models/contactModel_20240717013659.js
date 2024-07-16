
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id : {
        type : ,
        required : ,
        ref : ,
    },
    name:{
        type : String,
        required : [true, "Please add the contact name"],
    },
    email:{
        type : String,
        required : [true, "Please add the contact email"],
    },
    phone:{
        type : String,
        required : [true, "Please add the  contact phone no."],
    }
},{
    timestamps:true
}
);

module.exports = mongoose.model("Contact", contactSchema);