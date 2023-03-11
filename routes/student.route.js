const express = require('express');

const router = express.Router();

const StudentList = require('../components/StudentList');
const { Student, Star, Like } = require('../db/models');
const StudentParams = require('../components/StudentParams');
const StudentCard = require('../components/StudentCard');

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll({ raw: true });
    const likes = await Like.findAll({ raw: true });
    res.renderComponent(StudentList, { title: 'Student List', students, likes });
  } catch (error) {
    res.send(console.log(error.message));
  }
});
router.get('/:studentId', async (req, res) => {
  const { studentId } = req.params;
  try {
    const student = await Student.findOne({ where: { id: Number(studentId) } });
    const star = await Star.findAll({ raw: true, where: { studentId } });
    res.renderComponent(StudentParams, { title: 'Student', student, star });
  } catch (error) {
    res.send(console.log(error.message));
  }
});
router.post('/', async (req, res) => {
  const { name, img } = req.body;

  try {
    if (name && img) {
      const student = await Student.create({ name, img, userId: req.session.userId });
      const star = await Star.findAll({ raw: true, where: { studentId: student.id } });

      res.json({ html: res.renderComponent(StudentCard, { student, star }, { htmlOnly: true }) });
    } else {
      res.json({ message: 'заполните все поля' });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});
router.delete('/:studentId', async (req, res) => {
  try {
    const student = await Student.findOne({ where: { id: req.params.studentId } });
    if (student.userId === req.session.userId) {
      const studentNum = await Student.destroy({ where: { id: req.params.studentId } });
      res.json({ studentNum });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});
module.exports = router;
