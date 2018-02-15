const express = require('express');
const router = express.Router();
const uploader = require('../helpers/uploadGCS');

const AssetController = require('../controllers/AssetController');

router.get('/:owner/test', (req,res) => {console.log(req.params.owner);})
router.get('/:owner/', AssetController.getAssets);
router.get('/:owner/:id', AssetController.getAsset);
router.post('/:owner/upload', uploader.multer.single('avatar'), uploader.sendUploadToGCS, AssetController.createAsset) //tambahkan method untuk mereturn url,name,size untuk diteruskan lagi saat create db

module.exports = router;