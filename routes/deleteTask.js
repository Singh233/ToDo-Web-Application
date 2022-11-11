
const express= require('express');
const router = express.Router();

const Todo = require('../models/todo');

router.use(express.urlencoded());

router.get('/delete-task', function(request, response) {
    //get the id from the query in the url
    let id = request.query.id;
    console.log(id);

    //find the contactin the database using id and delete
    Todo.findByIdAndDelete(id, function(error) {
        if (error) {
            console.log('error in deleting an object from database');
            return;
        }
        console.log("Deleted successfully");
        return response.redirect('back');
    })

    

});


module.exports = router;