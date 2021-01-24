/* eslint-disable no-console */
const Review = require('./index.js');

const adjectives = ['horrible', 'awesome', 'fascinating', 'great', 'incredible', 'stunning', 'not good', 'overrated', 'terrible'];
const items = ['hoodie', 'shirt', 'product', 'pair of shorts', 'pair of socks', 'pair of pants'];
const comfortLevel = ['Uncomfortable', 'Not Very Comfortable', 'Comfortable', 'Very Comfortable', 'Extremely Comfortable'];
const fit = ['Small', 'A Little Small', 'Fits Good', 'A Little Big', 'Big'];
const quality = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];
const users = ['kevin', 'bob', 'greg', 'matthew', 'jason', 'sam', 'trent', 'vini', 'ant', 'smith', 'dogo', 'rob', 'joshua', 'charmander', 'ashe', 'pika', 'peace'];
const emails = ['@yahoo.com', '@gmail.com', '@outlook.com', '@aol.com', '@microsoft.com', '@hackreactor.com'];
// eslint-disable-next-line max-len
const numbers = [3, 5, 10, 203, 121, 557, 32, 88, 433, 23, 2, 4, 8, 93, 3465, 123, 11, 17, 35, 91, 56, 69, 48, 57, 1];
const stars = [1, 2, 3, 4, 5];

const randomizer = (arr) => {
  const output = arr[Math.floor(Math.random() * arr.length)];
  return output;
};

const createReview = () => {
  const review = {};

  review.productId = Math.floor(Math.random() * 26);
  review.title = randomizer(adjectives) + ' ' + randomizer(items);
  review.description = 'This ' + randomizer(items) + ' is ' + randomizer(adjectives);
  review.stars = randomizer(stars);
  review.comfortLevel = randomizer(comfortLevel);
  review.fit = randomizer(fit);
  review.quality = randomizer(quality);
  review.createdAt = randomizer(numbers).toString();
  review.user = randomizer(users) + randomizer(numbers).toString();
  review.email = randomizer(users) + randomizer(numbers).toString() + randomizer(emails);
  review.yes = 0;
  review.no = 0;
  review.report = 'Report';

  return review;
};

const generateReviews = () => {
  const reviews = [];
  for (let i = 0; i < 400; i++) {
    reviews.push(createReview());
  }
  return reviews;
};

const sampleData = generateReviews();

// seeds database
Review.create(sampleData)
  .then(() => {
    console.log('Seeded Database!');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  randomizer, createReview, generateReviews,
};
