const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content : String , 
    author : String , 
    productid : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'products'
    },
    date : Date 
})

const comment = mongoose.model('comments' , commentSchema);

module.exports = comment ;