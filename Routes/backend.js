var express = require('express')
//import controllers
const mcqdata = require('../Controllers/Mcq')
const user = require('../Controllers/Users')

const router = express.Router();

//Reading all the mcqs
//default TESt1
router.get('/allQuestions', mcqdata.getMCQData)

//adding single mcq
router.post('/addmcq',mcqdata.addMCQ)

//colelction count
router.get('/count',mcqdata.getTotalCount)
//To create new test of user choice
router.post('/new',mcqdata.createnewTest)

//USERS
router.post('/assign',user.AssignTestToStudent)

//List users
router.get('/users',user.ListUsers)



module.exports = router