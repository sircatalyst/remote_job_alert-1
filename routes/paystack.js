var express = require('express');
var router = express.Router();
var Paystack = require('../controllers/paystack');

router.get('/callback', Paystack.verifyMoney);
router.get('/receipt/:id', Paystack.redirect);

module.exports = router;
