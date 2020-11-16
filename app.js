const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./Routes/index.js');

const server = express();
const hostname = '127.0.0.1';
const port = '8080';

server.use(express.json());
server.use(express.urlencoded())
server.use('/', bookRouter);
server.use('/static',express.static('public'))

server.listen(port, function(){
    console.log(`Server is running a t http://${hostname}:${port}/`)
});

//set up default mongoose coneection
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})

// get the default connection
const db = mongoose.connection;

db.on('error', function(){
    console.log('connection error');
});

db.once('open', function(){
    console.log('database connected');
});


