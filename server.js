const express = require('express');
const app = express() ;
const env = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const productrouter = require('./routers/ProductRouter');
const userrouter = require('./routers/UserRouter');
const utilrouter = require('./routers/UtilRouter');
const cors = require('cors');
// CONFIG ENV
env.config();

// CONNECT MONGO
mongoose.connect(process.env.URL_DATABASE) 
    .then(() => {
        console.log('connect mongodb successfull');
    })
    .catch((err) => {
        console.log('MONGODB ERROR: ' + err);
    })


app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

// PRODUCT
app.use('/' , productrouter);

// USER
app.use('/', userrouter);

// UTILITIES
app.use('/util/' , utilrouter);


app.listen(process.env.PORT , () => {
    console.log('Server run port: ' + process.env.PORT);
})