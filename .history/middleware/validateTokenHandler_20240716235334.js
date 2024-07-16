const asyncHandler = require("express-async-handler");
const jst = require("jsonwebtoken");

const validateToken = asyncHandler( asyc (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("User is not Authorized");
            }
            console.log(decoded)
        });
    }
});