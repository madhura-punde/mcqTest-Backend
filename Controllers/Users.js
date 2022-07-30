
const teachers = [{id : 1}]
const students = [{id : 1, AssignedTest : []},
{id: 2, AssignedTest: []}
]

exports.ListUsers = (req,res)=>{
    res.send(students )
    
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
