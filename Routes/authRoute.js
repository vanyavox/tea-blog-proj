const router = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login.jsx');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Login, { title: 'Autorize' });
});

router.post('/reg', async (req, res) => {
  const {
    login, email, addres, password1, password2,
  } = req.body;
  let user;
  try {
    if (!login || !email || !password1 || !password2 || !addres) {
      return res.status(400).json({ message: 'Необходимо заполнить все поля', status: false });
    }

    if (password1 !== password2) {
      return res
        .status(400)
        .json({ message: 'Пароли не совпадают :(', status: false });
    }

    user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ message: 'Пользователь с таким e-mail уже зарегистрирован!', status: false });
    }

    const password = await bcrypt.hash(password1, 10);
    const newUser = await User.create({
      login, password, email, addres, isAdmin: false,
    });

    req.session.user_id = newUser.id;
    res.status(201).json({ message: 'success', status: true });
  } catch (e) {
    res.json({ message: e.message });
  }
});

module.exports = router;
