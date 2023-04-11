// SHOE_TYPES
// id : String 
// title : String 

const mongoose = require('mongoose');

const types = new mongoose.Schema({
    title : String 
})

module.exports = mongoose.model('types' , types);