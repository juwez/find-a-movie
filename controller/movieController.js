const express = require('express');
const router = express.Router();
const repo = require('../data/movieRepo')
const filterMovies = require('../services/filterMovies')
const url = require('url')
const {HttpError} = require("http-errors");

router.get("/year", async (req, res) => {
    let year = await repo.getYear();
    return res.send(
        {year: year})
        .status(200);
});
router.get("/metascore", async (req, res) => {
    let metascore = await repo.getMetascore();
    return res.send(
        {metascore: metascore})
        .status(200);
});

router.get("/getByParameter", async (req, res) => {
    let movies = await filterMovies.filterMovies(req.query.actor, req.query.genre, req.query.year, req.query.metascore);
    console.log(movies)
    if (movies === HttpError) {
        return res.status(400)
    }
    return res.send(
        {movies})
        .status(200);
})


module.exports = router
