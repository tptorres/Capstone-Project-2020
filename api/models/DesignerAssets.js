const mongoose = require('mongoose');
const Reviews = require('./Review');
const Images = require('./Image');

const DesignerAssetsSchema = new mongoose.Schema({
  status: {
    enum: ['active', 'inactive']
  },
  totalRating: {
    type: Number,
    min: 1,
    max: 5
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  reviews: {
    type: [Reviews]
  },
  // Want to display most recent images
  portfolio: {
    type: [Images]
  }
});

module.exports = mongoose.model('DesignerAssets', DesignerAssetsSchema);
