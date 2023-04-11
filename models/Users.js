// USERS 
// id : String 
// name : String 
// password : String 
// admin : Bolean

const mongoose = require('mongoose');

const users = new mongoose.Schema({
    name : String , 
    email : String ,
    password : String , 
    admin : {
        type : Boolean , 
        default : false 
    }
})

module.exports = mongoose.model('users' , users);