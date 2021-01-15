const seed = require('./database/seed.js');

describe('randomizer function', () => {
  test('generate a random value in the array', () => {
    expect([1, 2, 3]).toContain(seed.randomizer([1, 2, 3]));
  });
});

describe('createReview function', () => {
  test('function should return an object that represents a review with properties', () => {
    expect(seed.createReview()).toHaveProperty('title');
    expect(seed.createReview()).toHaveProperty('description');
    expect(seed.createReview()).toHaveProperty('stars');
    expect(seed.createReview()).toHaveProperty('user');
    expect(seed.createReview()).toHaveProperty('productId');
    expect(seed.createReview()).toHaveProperty('email');
    expect(seed.createReview()).toHaveProperty('yes');
    expect(seed.createReview()).toHaveProperty('no');
    expect(seed.createReview()).toHaveProperty('report');
    expect(seed.createReview()).toHaveProperty('comfortLevel');
    expect(seed.createReview()).toHaveProperty('fit');
    expect(seed.createReview()).toHaveProperty('quality');
    expect(seed.createReview()).toHaveProperty('createdAt');
  });
});

describe('generateReviews function', () => {
  test('function should generate an array of review objects', () => {
    expect(seed.generateReviews()).toHaveLength(400);
  });
});
