const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field cannot be empty']
  },
  category: {
    type: String,
    required: [true, 'Category field cannot be empty'],
    enum: ['Image', 'Document', 'Video', 'Audio']
  },
  url: {
    type: String,
    required: [true, 'Url field cannot be empty']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;