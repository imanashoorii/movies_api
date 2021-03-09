const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const movieSchema = Schema ({

    _id: ObjectId,
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model("Movie", movieSchema);