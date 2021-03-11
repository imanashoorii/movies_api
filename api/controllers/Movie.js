const mongoose = require('mongoose');
const Movie = require('../models/Movie');

// List all Movies
exports.detail = (req, res, next) => {
    console.log('ok detail')
    Movie.find({}).then(
        movies => {
            res.json(movies)
        }
    ).catch(err => {
        throw err
    })
}

// Createing Movie
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