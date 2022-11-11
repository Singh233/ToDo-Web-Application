const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');
router.use(express.urlencoded());

router.post('/create-task', function(request, response) {
    console.log(request.body.category);
    
    Todo.create({
        description: request.body.description,
        date: request.body.date,
        category: request.body.category,
        status: false
    }, function(error, newTask) {
        if (error) {
            console.log('error in creating a task');
            return;
        }
        console.log('*********', newTask);
        return response.redirect('back');
    })
});

module.exports = router;



