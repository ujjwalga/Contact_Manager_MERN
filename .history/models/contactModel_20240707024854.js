
import { Schema, model } from "mongoose";

const contactSchema = Schema({
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

export default model("Contact", contactSchema);