const dbHelpers = require('./index.js');

const items = ['hoodie', 'shirt', 'product', 'pair of shorts', 'pair of socks', 'pair of pants'];
// const users = ['kevin', 'bob', 'greg', 'matthew', 'jason', 'sam', 'trent', 'vini', 'ant', 'smith', 'dogo', 'rob', 'joshua', 'charmander', 'ashe', 'pika', 'peace'];
const users = ['DoubleCheckYouAreNotZoomedInWhileDoingCSS','iLOVEcss', 'scrimba', 'jQueryisgreatSike','HelpDesk', 'CovidSucks', 'HiHrLA41Seniors', 'HelloHRLA42Juniors', 'ilovebobatea', 'TrentIsaGOD', 'HireMeChampion', 'JulianIsFamous?!', 'HireMeNetflix', 'HireMeFacebook', 'HireMeGoogle', 'VenmoMe$5BucksIfYouSeeThis', 'DivDivDivDivDiv', 'MyBrainIsDone', 'iBrokeMyCode', 'CtrlC+CtrlV'];
const emails = ['@yahoo.com', '@gmail.com', '@outlook.com', '@aol.com', '@microsoft.com', '@hackreactor.com'];
const numbers = [3, 5, 10, 203, 121, 557, 32, 88, 433, 23, 2, 4, 8, 093, 3465, 123, 11, 17, 35, 91, 56, 69, 48, 57, 1];
const colors = ['red', 'black', 'purple', 'orange', 'yellow', 'pink', 'maroon', 'olive', 'blue', 'turquoise', 'white'];
const responseCounter = [1, 2];

const randomizer = (arr) => {
  var output = arr[Math.floor(Math.random() * arr.length)];
  return output;
}

const createQuestion = () => {
  let question = {};

  question.productId = Math.floor(Math.random() * 3);
  question.description = 'Does this ' + randomizer(items) + ' come in ' + randomizer(colors) + '?';
  question.createdAt = randomizer(numbers);
  question.user = randomizer(users) + randomizer(numbers).toString();
  question.email = randomizer(users) + randomizer(numbers).toString() + randomizer(emails);
  question.responseCount = randomizer(responseCounter);

  return question;
}

const generateQuestions = () => {
  const responses = [];
  for (var i = 0; i < 50; i++) {
    responses.push(createQuestion());
  }
  return responses;
}

const sampleData = generateQuestions();

dbHelpers.Question.create(sampleData)
  .then(() => {
    console.log('Seeded Database!');
  })
  .catch((err) => {
    console.log(err);
  });