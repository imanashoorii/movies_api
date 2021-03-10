const mongoose = require('mongoose');

exports.detail = (req, res, next) => {
    console.log('ok')
    res.json({
        'msg': 'hello'
    })
}


const Movie = require('../models/Movie');

exports.create = (req, res) => {
    const { title, director } = req.body;

    const newMovie = new Movie ({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        director: director
    })
    newMovie.save((err, result) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                "message": "Movie Creation Failed"
            })
        } else {
            console.log(result)
            res.status(200).json({
                "message": "Movie Created"
            })
        }
    })
    console.log(newMovie)
};