const mongoose = require('mongoose');

exports.detail = (req, res, next) => {
    console.log('ok')
    res.json({
        'msg': 'hello'
    })
}


const Movie = require('../models/movies');

exports.create = (req, res, next) => {
    const { title, director } = req.body;

    const newMovie = new Movie ({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        director: director
    })
    newMovie.save()
           .then( newMovie => console.log(newMovie),
               res.json({
                   'message': "User Created"
               })
            
           )
           .catch(err => console.log(err), res.json({
               'message': 'Failed'
           }))

};