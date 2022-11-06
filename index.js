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



app.listen(port, function(error) {
    if (error) {
        console.log(`Error in running the server ${error}`);
        return;
    }

    console.log(`Server is up and running on port ${port}`);
});