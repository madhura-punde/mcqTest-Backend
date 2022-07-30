# mcqTest-Backend
Backend for Online MCQ Test Application

I have created this backend project for MCQ Test Applocation. 
For this, I have use mongoose and express framework.

Consider Teacher-Student scenerio

Following functionalities are implemented :-
1) You can create a complete new mcq test. (/new)
2) You can get the total number of tests (collections) available in the database. (/count)
3) You can add 1 say leftover (updating 1 mcq) mcq in currently existing test in current case MCQ will be added in Test1. (addmcq)
4) You can see all questions in Test1. (/allQuestions)
5) You can see the users list. (/users)
6) If you are a Teacher, in that case you can assign a test to particular student. (/assign)

 For Testing purpose, I have not created databases for users, kindly consider array.
 In the given scenerios, name after specific condition is a route name which I have given in backend.js (Route folder). 
 All routes are mentioned over there. 
 
 In the controller folder, there are 2 separate folders of MCQs and users.
 
 
 HOW TO RUN THE PROJECT?
 
 1) node app.js 
 2)Refer request.rest for the routes. I have defined majority of them for the reference.
 
 
 Hope that helps,
 Thankyou!
 
 
