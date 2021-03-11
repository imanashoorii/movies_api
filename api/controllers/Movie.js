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

// Get detail by title

exports.detailByTitle = (req, res, next) => {
    Movie.find({title: new RegExp('^' + req.params.title + '$', 'i')}, (err, result) => {
        if (result) {
            if (result.length === 0) {
                console.log("No Result")
                res.status(400).json({
                    "message": "Not found"
                })
            } else {
                console.log(result)
                res.status(200).json(result)
            }
        } else {
            console.log(err)
            res.status(400).json({
                "message": "Error Found"
            })
        }
    })
}