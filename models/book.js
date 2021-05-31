const express = require('express');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

//creating schema
const BookSchema = new schema({
    title: {type: String, required:true},
    author: String,
    ISBN: {type:Number, unique:true},
    published_date: { type: Date},
    date_of_update: {type: Date, default:Date.now}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;

