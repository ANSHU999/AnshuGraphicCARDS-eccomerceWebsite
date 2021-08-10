const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://anshusilswal:1234@cluster0.p4btd.mongodb.net/mern-card'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})


var db = mongoose.connection

db.on('connected' , ()=>{
    console.log(`mongo DB Connection Successfull`);
})

db.on('error' , ()=>{
    console.log(`mongo DB Connection failed`);
})

module.exports = mongoose