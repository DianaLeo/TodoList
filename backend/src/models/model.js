const mongoose = require('mongoose');
const moment = require('moment-timezone');
const dateBrisbane = moment.tz(Date.now(),'Brisbane');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
},
    {
        timestamps: true,
    }
);

//This name 'Todo' is your collection name under 'test' database
//I changed it from 'TodoDB' to 'Todo', so there are two collections under my 'test' now.
module.exports = mongoose.model('Todo', TodoSchema);