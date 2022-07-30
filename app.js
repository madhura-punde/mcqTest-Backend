//importing framework or external packages
const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
//importing required data
const test = require('./Routes/backend')

const PORT= 8080

mongoose.connect('mongodb://127.0.0.1:27017/mcqTest',
     ()=>{
    console.log("mongoDB connected")},
    e=>console.log(e))

const app = express()

//middleware
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json())
app.use('/',test)



app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
  })