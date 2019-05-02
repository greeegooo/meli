var express = require('express');
var router = express.Router();
var business = require('../business/searchBusiness');

router.get('/', async function(req, res, next) {

    try {
        res.json(await business.search(req.query.q));
    }
    catch (e) {
        res.send(e);
    }
});

module.exports = router;
