
const teachers = [{id : 1, type : "teacher"}]
const students = [{id : 1, type:"student", AssignedTest : []},
{id: 2,type : "student", AssignedTest: []}
]

combinedArrayUser = [...teachers, ...students]
console.log(combinedArrayUser)

exports.ListUsers = (req,res)=>{
    res.send(combinedArrayUser)
    
}

exports.AssignTestToStudent = (req,res) =>{
    let RequestedUser = req.body
    //console.log(RequestedUser)

    let result =  teachers.some(item => item.id == RequestedUser.teacherID)
   // console.log(result)

    if (result){
        console.log("-------------You are admin-------------")
        const requestedStudentID =  req.body.studentID
        let status = students.some(item=>item.id == requestedStudentID)
        // console.log(status)
         students.some(CheckAccess)
        
    }
    else{
        //console.log("Invalid User. Contact Admin")
        res.status(200).json({
            Message : "Invalid User. Contact Admin"

        })
    }
    
function CheckAccess(element, index, array){
    console.log("CheckAccess called")
    console.log(element)

    if (element.id == req.body.studentID){
        console.log(req.body.AssignedTest)
        const newTest = req.body.AssignedTest
        element.AssignedTest.push(newTest)
        console.log(element)
        return
        
    }
}
   
    
}
