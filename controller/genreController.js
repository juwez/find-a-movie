const express=require("express");
const router=express.Router();
const repo = require('../data/genreRepo')

router.get("/", async (req,res) => {
    let genres = await repo.getAll();
    return res.send(
        {genres : genres})
        .status(200);
});

module.exports = router
