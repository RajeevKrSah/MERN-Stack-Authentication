const mongoose = require('mongoose');

mongoose.connect(process.env.mongoDB_URI)
    .then(()=>{
        console.log("MONGODB Connected ......!!!!")
    })
    .catch((err)=>{
        console.log("MONGODB Connection ERROR....!!!",err)
    })