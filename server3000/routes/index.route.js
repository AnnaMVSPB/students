const express = require('express');

const router = express.Router();

const mainRouter = require('./main.route');
const studentRouter = require('./student.route');
const authRouter = require('./auth.route');

router.use('/', mainRouter);
router.use('/students', studentRouter);
router.use('/auth', authRouter);
module.exports = router;
