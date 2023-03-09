const express = require('express');

const router = express.Router();

const { Student } = require('../db/models');
const { StudentCard } = require('../components/StudentCard');

router.post('/', async (req, res) => {
  console.log(123456789);
  const { name, img } = req.body;

  try {
    if (name && img) {
      const student = await Student.create({ name, img, userId: 1 });
      res.app.locals.studentName = student.name;
      res.cookie('anya', 31);
      res.json({ html: res.renderComponent(StudentCard, { student }, { htmlOnly: true }) });
    } else {
      res.json({ message: 'заполните все поля' });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
