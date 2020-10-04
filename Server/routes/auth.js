const express = require('express');
const authCtrl = require('../js/auth');

const router = express.Router();

router.post('/auth', authCtrl.postLogin);

module.exports = router;
