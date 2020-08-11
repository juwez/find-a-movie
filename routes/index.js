const express = require('express');
const router = express.Router();
const repo=require('../data/actorsRepo')
/* GET home page. */
router.post('/leo',async (req,res) => {
    let test = await repo.insertActor();
    return res.send({
        test : test
    }).status(201);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
