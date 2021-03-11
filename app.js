const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

mongoose.connect("mongodb://root:root@192.168.56.3:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
err => {
    if (!err) {
        console.log("Connected")
    } else {
        console.log("connection error" + err)
    }
}
);

const apiRoutes = require('./api/routes/routes');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const { API_URL } = require('./api/consts')

app.use(API_URL, apiRoutes)


module.exports = app;