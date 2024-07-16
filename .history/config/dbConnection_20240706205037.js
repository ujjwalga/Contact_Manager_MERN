const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}