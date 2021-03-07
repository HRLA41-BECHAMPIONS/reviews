const seed = require('./database/seedReviews.js');

describe('randomizer function', () => {
  test('generate a random value in the array', () => {
    expect([1, 2, 3]).toContain(seed.randomizer([1, 2, 3]));
  });
});

describe('createReview function', () => {
  test('function should return an object that represents a review with properties', () => {
    expect(seed.createBadReview()).toHaveProperty('title');
    expect(seed.createBadReview()).toHaveProperty('description');
    expect(seed.createBadReview()).toHaveProperty('stars');
    expect(seed.createBadReview()).toHaveProperty('user');
    expect(seed.createBadReview()).toHaveProperty('productId');
    expect(seed.createBadReview()).toHaveProperty('email');
    expect(seed.createBadReview()).toHaveProperty('yes');
    expect(seed.createBadReview()).toHaveProperty('no');
    expect(seed.createBadReview()).toHaveProperty('report');
    expect(seed.createBadReview()).toHaveProperty('comfortLevel');
    expect(seed.createBadReview()).toHaveProperty('fit');
    expect(seed.createBadReview()).toHaveProperty('quality');
    expect(seed.createBadReview()).toHaveProperty('createdAt');
    expect(seed.createBadReview()).toHaveProperty('recommend');
  });
});

describe('generateReviews function', () => {
  test('function should generate an array of review objects', () => {
    expect(seed.generateReviews()).toHaveLength(400);
  });
});
