var express = require('express');
var router = express.Router();
var business = require('../business/itemBusiness');

router.get('/', async function(req, res, next) {

    try {
        res.json(await business.getItem(req.query.q));
    }
    catch (e) {
        res.send(e);
    }
});

module.exports = router;
