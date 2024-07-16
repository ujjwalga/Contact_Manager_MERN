const express = require("express");
const dotenv = require("dotenv").config()
const app = express();

app.listen(port, () => {
    console.log(`server running on ${port}`);   
})