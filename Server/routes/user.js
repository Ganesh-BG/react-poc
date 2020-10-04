const express = require('express');
const userCtrl = require('../js/user');

const router = express.Router();

router.post('/users', userCtrl.postUser);

module.exports = router;
