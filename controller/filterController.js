const express = require("express");
const router = express.Router();
const filterRepo = require('../data/filterRepo');

router.get("/", async (req, res) => {
        let filters = await filterRepo.getAllFilters()
        return res.send(
            {filters:filters})
            .status(200);
    }
);
module.exports = router
