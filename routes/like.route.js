const express = require('express');

const router = express.Router();
const { Like } = require('../db/models');

router.put('/:studentId', async (req, res) => {
  try {
    const like = await Like.findOne({
      where: { studentId: Number(req.params.studentId), userId: req.session.userId },
    });
    if (like) {
      await Like.destroy({
        where: { studentId: Number(req.params.studentId), userId: req.session.userId },
      });
    } else {
      await Like.create({
        studentId: Number(req.params.studentId), userId: Number(req.session.userId),
      });
    }
    const likeArr = await Like.findAll({
      raw: true, where: { studentId: Number(req.params.studentId) },
    });
    res.status(200).json({ quantityLikes: likeArr.length });
  } catch (e) {
    res.status(500).json(e.message);
  }
});
module.exports = router;
