import { connect as _connect } from "mongoose";

const connectDb = async ()=>{
    try{
        const connect = await _connect(process.env.CONNECTION_STRING);
        console.log(
            "Database Connected : ",
            connect.connection.name,
            connect.connection.host
        );
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

export default connectDb;