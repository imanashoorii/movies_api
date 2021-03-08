const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

const connectToMongoDB = async() => {
    try {
        await mongoose.connect('mongodb://root:root@192.168.56.3:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch(err) {
        throw err
    }
}


const apiRoutes = require('./api/routes/routes');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const { API_URL } = require('./api/consts')

app.use(API_URL, apiRoutes)


module.exports = app;