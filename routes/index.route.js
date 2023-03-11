const express = require('express');

const router = express.Router();

const mainRouter = require('./main.route');
const studentRouter = require('./student.route');
const authRouter = require('./auth.route');
const starRouter = require('./star.route');
const likeRouter = require('./like.route');

router.use('/', mainRouter);
router.use('/students', studentRouter);
router.use('/auth', authRouter);
router.use('/star', starRouter);
router.use('/like', likeRouter);
module.exports = router;
