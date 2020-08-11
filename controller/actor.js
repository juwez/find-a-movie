const express = require("express");
const router = express.Router();
const repo = require('../data/actorRepo')

router.get("/", async (req,res) => {
    let genres = await repo.getAll;
    return res.send({genres}).status(200);
});

module.exports = router
