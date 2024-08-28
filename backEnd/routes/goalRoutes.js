const express = require('express');
const router = express.Router();
const { getGoals, setGoal } = require('../controller/goalController');

router.get('/', getGoals);

router.post('/', setGoal);  

module.exports = router;