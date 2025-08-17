const mongoose = require('mongoose');

const books = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    },
    authorName : {
        type : String,
        required : true
    },
    publishedDate : {
        type : String,
        required : true
    },
    oldPrice : {
        type : Number,
        required : true
    },
    newPrice : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    bookImage : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    category : {
        type : String
    }
})

module.exports = mongoose.model("book",books);