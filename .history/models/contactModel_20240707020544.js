
const { default: mongoose } = require("mongoose");

const schema = mongoose.schema({
    name:{
        type : String,
        required : [true, "Please add the  contact name"
    }
})