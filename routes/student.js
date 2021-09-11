const express = require('express');
const studentDetailsModel = require('../models/studentDetails');
const router =express.Router();

router.post('/add', async function(request, response){
    // console.log('request.body', request.body);
    try{
        const dataBaseCreationResponse = await studentDetailsModel.create(request.body);
        console.log('dataBaseCreationResponse', dataBaseCreationResponse);
        response.send({result:"Success"});
    } catch(error){
        console.log('error occured',error);
    }
    
});

router.get('/getStudentDetails', async function(request, response){
    try{
        const listOfStudents = await studentDetailsModel.find({},{__v:0, _id:0});
        // console.log('data from database',listOfStudents);
        response.send(listOfStudents);
    } catch(error){
         console.log('error occured',error);
    }
    
});
module.exports = router;