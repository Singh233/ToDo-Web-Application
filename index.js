const express = require('express');
const app = express();
const port = 8000;

// add config
const db = require('./config/mongoose');

// add Schema
const Todo = require('./models/todo');

// use express router
app.use('/', require('./routes'));

// adding view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use(express.static('assets'));



app.post('/create-task', function(request, response) {
    console.log(request.body.description);
    
    Todo.create({
        description: request.body.description,
        date: request.body.date,
        category: 'work'
    }, function(error, newTask) {
        if (error) {
            console.log('error in creating a task');
            return;
        }
        console.log('*********', newTask);
        return response.redirect('back');
    })
});

app.listen(port, function(error) {
    if (error) {
        console.log(`Error in running the server ${error}`);
        return;
    }

    console.log(`Server is up and running on port ${port}`);
});