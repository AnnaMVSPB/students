const express = require('express');

const router = express.Router();
const { Star } = require('../db/models');

router.put('/:studentId/minus', async (req, res) => {
  try {
    const star = await Star.findOne({
      where: { studentId: Number(req.params.studentId), userId: req.session.userId },
    });
    if (star) {
      if (star.count !== 0) {
        star.count -= 1;
        star.save();
      }
    }

    res.status(200).json({ quantityStar: star.count });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.put('/:studentId/plus', async (req, res) => {
  try {
    let star = await Star.findOne({
      where: { studentId: Number(req.params.studentId), userId: req.session.userId },
    });
    if (star) {
      star.count += 1;
      star.save();
    } else {
      star = await Star.create({
        studentId: Number(req.params.studentId), userId: req.session.userId, count: 1,
      });
    }

    res.status(200).json({ quantityStar: star.count });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
