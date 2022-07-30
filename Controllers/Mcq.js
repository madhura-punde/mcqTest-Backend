const { default: mongoose } = require('mongoose')
const McqResults= require('../Model/Mcq') 
const MCQSchema1 = require('../Model/template')


exports.getMCQData = (req, res)=> {
    //console.log(mcqResults)
   
    McqResults.find().then(
        result=>{
            //console.log(McqResults)
            res.status(200).json({ 
            message:"MCQ DATA fetched successfully" , 
            data : result })
            })

        .catch(error=>{
            res.status(500).json({ message:"Error in database" , 
            error:error })
          })
}


//To add 1 question in some specific test here ex.Test1
exports.addMCQ = (req, res)=>{
    console.log("addMCQ Method")
   // console.log(req.body)
   const newquestion = new McqResults({

    question : req.body.question,
    A : req.body.A,
    B : req.body.B,
    C:  req.body.C,
    D:  req.body.D
   })
   newquestion.save((error)=>{
    //console.log("Entered here")
    if(!error){
        res.send("successfully added a new mcq question")
    }
    else{
        console.log(error)
        res.send(error);
    }
   })

}

//Total collection count in DB
exports.getTotalCount = (req, res)=>{ 
  

    var ans = mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names.length); // [{ name: 'dbname.myCollection' }]
       var MCQTestNames = []

        names.forEach(item=>{
            MCQTestNames.push(item.name)
            //console.log(item.name)
        })
       //console.log(MCQTestNames)

        if(err){
            res.status(200).json({
                Error : err
            })}
        else(
            res.status(200).json({
                TestCollection : names.length,
                AllTestNames : MCQTestNames
                
               
            })
        )
       
    });
}


//creating a fresh new Test
exports.createnewTest = (req, res)=>{
    const testName = req.body.testName
    const New_mcqs = req.body.mcqs
   // console.log(req.body)

    //Creating Database which user is giving for test
   const newDB = mongoose.model(`${testName}`,MCQSchema1)
     newDB.insertMany(New_mcqs)
      .then(function(docs) {
         // console.log("Data Inserted Successfully")

          res.status(200).json({
            Message : "Data Inserted Successfully",
            MCQ : docs
        })
        
     })
     .catch(function(err) {
        //console.log("Opps some error occurred! Try after some time.")

        res.status(200).json({
            Message : "Opps some error occurred! Try after some time."
        })
     });

}

