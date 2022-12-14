const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true },
    date: {type: Date, required: true},
    category: {type: String, required: true},
    status: {type: Boolean}
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;