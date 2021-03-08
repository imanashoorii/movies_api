const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

var create = new Date()

const movieSchema = Schema ({

    _id: ObjectId,
    title: {
        type: String,
        unique: true,
        required: true,
    },
    director: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model("Movies", movieSchema);