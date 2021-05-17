const express = require('express');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

//creating schema
const BookSchema = new schema({
    title: {type: String, unique:true, required:true},
    author: String,
    ISBN: Number,
    published_date: { type: Date},
    date_of_update: {type: Date, default:Date.now}
});

const BookModel = mongoose.model('BookModel', BookSchema);

module.exports = BookModel;

