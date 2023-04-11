

const mongoose = require('mongoose');

const products = new mongoose.Schema({
    id : {
        type : Number 
    },
    title : String ,
    quantity : {
        type : Number ,
        default : 1 
    },
    price : Number ,
    description : String , 
    image : [ String ] ,
    size : [ {size_title : String , stock : Number , active : {type : Boolean , default : false}} ],
    type : {
        type : mongoose.Types.ObjectId ,
        ref : 'types'
    },
    trademark : {
        type : mongoose.Types.ObjectId ,
        ref : 'trademarks'
    }
})

module.exports = mongoose.model('products' , products);