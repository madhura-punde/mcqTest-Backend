var express = require('express')
//import controllers
const mcqdata = require('../Controllers/Mcq')
const user = require('../Controllers/Users')



const router = express.Router();

//Reading all the mcqs
router.get('/allQuestions', mcqdata.getMCQData)
router.post('/addmcq',mcqdata.addMCQ)
router.get('/count',mcqdata.getTotalCount)

router.post('/new',mcqdata.createnewTest)

router.post('/assign',user.AssignTestToStudent)

router.get('/users',user.ListUsers)



module.exports = router