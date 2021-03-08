const mongoose = require('mongoose');

const Movies = require('../models/movies');


exports.detail = (req, res, next) => {
    console.log('ok')
    res.json({
        'msg': 'hello'
    })
}