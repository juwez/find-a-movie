const express = require('express');
const router = express.Router();
const repo = require('../data/movieRepo')

router.get("/year", async (req,res) => {
    let year = await repo.getYear();
    return res.send(
        {year : year})
        .status(200);
});
router.get("/metascore", async (req,res) => {
    let metascore = await repo.getMetascore();
    return res.send(
        {metascore : metascore})
        .status(200);
});

module.exports = router
