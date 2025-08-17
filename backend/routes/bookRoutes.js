const express = require('express');
const router = express.Router();
const {createBook,getAllBooks,getSingleBook,updateBook, deleteBook} = require('../controllers/BookController');

// This api for creating the book
router.post('/books',createBook);
// api for getting the book
router.get("/books",getAllBooks);
// get single book api
router.get("/books/:id",getSingleBook);
// update book api
router.put("/books/:id",updateBook);
// delete book api
router.delete("/books/:id",deleteBook);


module.exports = router;