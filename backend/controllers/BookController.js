const express = require('express');
const BookSchema = require('../models/Book');

// create books
exports.createBook = async (req,res)=>{
    const data = req.body;
    BookSchema.create(data)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.error("Error creating books "+err);
        res.status(500).json({error : "Error adding books"});
    })
}

// get all books
exports.getAllBooks = async(req,res)=>{
    BookSchema.find()
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(500).json({error:"Can not find books"});
    })
}

// get single book
exports.getSingleBook = async(req,res)=>{
    const { id } = req.params;
    BookSchema.findById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ error: "Book not found" });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error("Error fetching book by ID:", err);
            res.status(500).json({ error: "Error retrieving the book" });
        });
}

// update book
exports.updateBook = async(req,res)=>{
    const { id } = req.params;
    const updatedData = req.body;
    BookSchema.findByIdAndUpdate(id,updatedData,{new:true})
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err) => {
        console.error("Error updating book by ID:", err);
        res.status(500).json({ error: "Error updating the book" });
    });
}

// delete book
exports.deleteBook = async(req,res)=>{
    const { id } = req.params;
    BookSchema.findByIdAndDelete(id)
    .then((data)=>{
        res.status(200).json({message:"Book Deleted Successfully"});
    })
    .catch((err) => {
        console.error("Error deleting book by ID:", err);
        res.status(500).json({ error: "Error deleting the book" });
    });
}
