const Contact = require('../models/todo');


module.exports.home = function(request, response) {
    Contact.find({}, function(error, tasks) {
        if (error) {
            console.log('Error in fetching tasks from db*****');
            return;
        }
        return response.render('home', {
            title: "Task List",
            task_list: tasks
        });
    })
};