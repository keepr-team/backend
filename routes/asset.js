const express = require('express');
const router = express.Router();

const AssetController = require('../controllers/AssetController');

router.get('/', AssetController.getFiles);
router.get('/:id', AssetController.getFile);

module.exports = router;