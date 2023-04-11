// ORDERS		
// id : String 		
// name : String 		
// email : String 		
// address : Srting 		
// phone : Number 		
// items : [{id : Number , title : String , quantity : Number , size : String }]		

		
const mongoose = require('mongoose');

const orders = new mongoose.Schema({
    name : String ,
    email : String , 
    address : String ,
    phone : Number ,
    items : [
        {title : String , quantity : Number , size : String , total : String } 
    ]
})

module.exports = mongoose.model('orders' , orders);