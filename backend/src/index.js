const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter =require('./routes/AuthRouter.js')
require('./db/index.js')
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(cors())
app.use('/auth',AuthRouter)

app.get("/",(req,res)=>{
    res.send('Hello from backend')
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
