const express = require('express');

const router = express.Router();

const mainRouter = require('./main.route');
const studentRouter = require('./student.route');

router.use('/', mainRouter);
router.use('/students', studentRouter);
module.exports = router;
