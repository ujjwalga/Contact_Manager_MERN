
const { default: mongoose } = require("mongoose");

const schema = mongoose.schema({
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
},
)