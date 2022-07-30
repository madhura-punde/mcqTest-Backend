const mongoose = require('mongoose')

const MCQSchema1= mongoose.Schema({
    question :{
        type:String,
        required:true  
    },
    A :{
        type:String,
        required:true  
    },
    B :{
        type:String,
        required:true  
    },
    C :{
        type:String,
        required:true  
    },
    D :{
        type:String,
        required:true  
    }
})
module.exports = MCQSchema1;