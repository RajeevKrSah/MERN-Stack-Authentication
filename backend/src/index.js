const express = require('express');
require('dotenv').config();
const app = express();
require('./db/index.js')
const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send('Hello from backend')
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
