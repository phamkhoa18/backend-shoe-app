// TRADEMARKS
// id : String 
// title : String 


const mongoose = require('mongoose');

const trademarks = new mongoose.Schema({
    title : String
})

module.exports = mongoose.model('trademarks' , trademarks);