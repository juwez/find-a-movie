const express = require("express");
const router = express.Router();
const repo = require('../data/actorRepo')

router.get("/", async (req,res) => {
    let actors = await repo.getAll();
    return res.send({actors}).status(200);
});

module.exports = router
