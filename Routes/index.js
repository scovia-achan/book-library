const express = require('express');
const router = express.Router();
const bookSchema = require('../models/book.js');

//Routes for the models
//get route
router.get('/', function(req, res){
    bookSchema.find({}, (err, booklist) => {
        if(err){
            console.log(err);
        }else{
            res.json(booklist);
        }
        
    });
});



router.post('/allbooks', (req, res) => {
    const newBook = new bookSchema({
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN
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


