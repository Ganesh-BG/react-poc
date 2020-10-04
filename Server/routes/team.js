const express = require('express');
const teamCtrl = require('../js/team');

const router = express.Router();

router.post('/team', teamCtrl.postTeam);

module.exports = router;
