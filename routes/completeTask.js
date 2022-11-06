const express= require('express');
const router = express.Router();

const Todo = require('../models/todo');

router.use(express.urlencoded());

router.post('/complete-task', function(request, response) {
    
    Todo.findByIdAndUpdate(request.body.id, {
        status: true
    }, function(error, data) {
        if (error) {
            console.log('failed to update');
            return;
        }
        return response.redirect('back');
    })
});


module.exports = router;
