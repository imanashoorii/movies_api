const express = require('express');
const router = express.Router();

const movieController = require("../../controllers/Movie")

const {
    detail,
    create,
    update,
    detailByTitle,
} = movieController;


router.get("/detail", detail);
router.get("/detail/:title", detailByTitle)
router.post("/create", create);
// router.post("/update", update);


module.exports = router