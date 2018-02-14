const Asset = require('../models/Asset');

class AssetController {

  static getAssets(req, res) {
    Asset.find({
        owner: req.params.owner
      })
      .then(docs => {
        res.status(200).json({
          message: 'Get assets success',
          docs: docs
        });
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }

  static getAsset(req, res) {
    Asset.findById(req.params.id)
      .then(doc => {
        res.status(200).json({
          message: error.message
        });
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }
}

module.exports = AssetController;