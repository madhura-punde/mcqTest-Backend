const mongoose = require('mongoose')

const MCQSchema= mongoose.Schema({

    // _id : {
    //     type:String
    //     //required:true  
    // },
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
module.exports=mongoose.model("Tests1", MCQSchema, 'Test1')