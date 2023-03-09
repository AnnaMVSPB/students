const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  try {
  res.send('я порт 4000')
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
