const mongoose = require('mongoose');

const nav_father = new mongoose.Schema({
    title : String ,
    bump : [{
        type : mongoose.Types.ObjectId , 
        ref : 'nav_childs'
    }],
    value : String 
})

const nav_child = new mongoose.Schema({
    title : String ,
    value : String 
})

var Nav_father = mongoose.model('nav_fathers' , nav_father);
var Nav_child = mongoose.model('nav_childs' , nav_child);
module.exports = {Nav_father,Nav_child} ;

