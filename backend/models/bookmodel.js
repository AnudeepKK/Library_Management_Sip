const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    Image: {
        type: String,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
        unique: true,
    },
    Author: {
        type: String,
        required: true,
        unique: true,
    },
    Genre: {
        type: String,
        required: true,
    },
    Public: {
        type: String,
        required: true,

    },
},
{timestamps:true}
);

module.exports = new mongoose.model("Student_Data",bookSchema);