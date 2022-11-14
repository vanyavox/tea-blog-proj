const router = require('express').Router();
const Registration = require('../views/Registration.jsx');

router
  .get('/', (req, res) => {
    res.renderComponent(Registration, { title: 'Registaration' });
  });

module.exports = router;
