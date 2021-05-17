const express = require('express');
const router = express.Router();
const Book = require('../models/book.js');

//Routes for the models
//get route
router.get('/', function(req, res){
    Book.find({}, (err, booklist) => {
        if(err){
            console.log(err);
        }else{
            res.json(booklist);
           
        }
        
    });
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book=>res.json(book))
        .catch(err=>res.status(404).json({message: "No book found"}))
})



router.post('/allbooks', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        published_date: req.body.published_date,
        date_of_update: req.body.date_of_update
    });   
    newBook.save()
    .then((allbooks) => {
        res.json({
            allbooks,
            msg:"posted books" + console.log("request posted")
        });
    })
    .catch((err) => {
        res.json({success:false, msg: "something is not right " + console.log(err)})
    })

});

module.exports = router;


