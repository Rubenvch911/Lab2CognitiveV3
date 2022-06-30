const express = require('express');
const router = express.Router();

const contactoController = require('../controllers/contactoController');

router.get('/', contactoController.list);
router.post('/add', contactoController.save);

module.exports = router;