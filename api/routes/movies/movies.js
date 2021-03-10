const express = require('express');
const router = express.Router();

const movieController = require("../../controllers/Movie")

const {
    detail,
    create,
    update,
} = movieController;


router.get("/detail", detail);
router.post("/create", create);
// router.post("/update", update);


module.exports = router