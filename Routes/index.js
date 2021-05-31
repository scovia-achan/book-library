const express = require('express');
const router = express.Router();
const Book = require('../models/book.js');

//Routes for the models
//get all books route
router.get('/', function(req, res){
    Book.find({}, (err, booklist) => {
        if(err){
            console.log(err);
        }else{
            res.json(booklist);
           
        }
        
    });
});

// get a single book
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
    .then((books) => {
        res.json({
            books,
            msg:"You have posted a new book"
        });
    })
    .catch((err) => {
        res.json({success:false, msg: "something is not right " + console.log(err)})
    })

});

router.put('/:id', (req, res)=>{
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book=> res.json({message: "book details updated"}))
        .catch(err=> res.status(400).json({error: "Unable to update book info"}))
})

router.delete('/:id', (req, res)=>{
    Book.findByIdAndDelete(req.params.id)
        .then(item => res.json("Book deleted successfully"))
        .catch(err=> res.status(404).json({error: "Book doesn't exist"}))
})

module.exports = router;


