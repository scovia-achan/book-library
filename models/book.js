const express = require('express');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

//creating schema
const BookSchema = new schema({
    title: {type: String, unique:true},
    author: String,
    ISBN: Number
});

const BookModel = mongoose.model('BookModel', BookSchema);

module.exports = BookModel;

