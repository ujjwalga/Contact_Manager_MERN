const asyncHandler = require("express-async-handler");
const jst = require("jsonwebtoken");

const validateToken = asyncHandler( asyc (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        
    }
});