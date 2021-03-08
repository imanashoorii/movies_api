const express = require('express');
const router = express.Router();

const movieRoutes = require('../routes/movies/movies')

router.use('/movies', movieRoutes)

module.exports = router;