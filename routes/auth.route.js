const express = require('express');
const bcrypt = require('bcrypt');
const Reg = require('../components/Reg');
const { User } = require('../db/models');
const Login = require('../components/Login');

const router = express.Router();

router.get('/reg', (req, res) => {
  res.renderComponent(Reg, { title: 'Rega' });
});

router.get('/login', (req, res) => {
  res.renderComponent(Login, { title: 'Login' });
});

router.post('/reg', async (req, res) => {
  try {
    const {
      password, password2, name, email,
    } = req.body;
    if (password && password2 && name && email) {
      if (password === password2) {
        const emailUser = await User.findOne({ where: { email } });
        if (!emailUser) {
          const hash = await bcrypt.hash(password, 10);
          const newUser = await User.create({ name, email, password: hash });
          req.session.userId = newUser.id;
          res.json({ message: 'ok' });
        } else {
          res.json({ message: 'Такой email уже существует' });
        }
      } else {
        res.json({ message: 'Ваши пароли не совпадают' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const {
      password, email,
    } = req.body;
    if (password && email) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        const isSame = await bcrypt.compare(password, user.password);
        if (isSame) {
          req.session.userId = user.id;
          res.json({ message: 'ok' });
        } else {
          res.json({ message: 'Неверная почта или пароль' });
        }
      } else {
        res.json({ message: 'Неверная почта или пароль' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.app.locals = {};
    res
      .clearCookie('user_sid')
      .redirect('/');
  });
});

module.exports = router;
