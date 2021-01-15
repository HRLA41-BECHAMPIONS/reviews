const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/champion_reviews', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('connected to champion_reviews mongodb!!!');
  });

const reviewSchema = new mongoose.Schema({
  productId: {
    type: Number,
  },
  title: String,
  description: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  quality: {
    type: String,
  },
  comfortLevel: {
    type: String,
  },
  fit: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  report: {
    type: String,
    default: 'Report',
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
