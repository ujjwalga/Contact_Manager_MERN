const express = require("express");
const dotenv = require("dotenv")
const app = express();

app.listen(port, () => {
    console.log(`server running on ${port}`);   
})