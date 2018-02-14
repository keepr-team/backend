const express = require('express');
const router = express.Router();

const AssetController = require('../controllers/AssetController');

router.get('/', AssetController.getAssets);
router.get('/:id', AssetController.getAsset);

module.exports = router;