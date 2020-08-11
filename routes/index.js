const express = require('express');
const router = express.Router();
/* GET home page. */
/*
let urls = [];
router.get("*", async (req, res) => {
    let currentVistedUrl = req.url;
    urls.push(currentVistedUrl);
    next();
);
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
