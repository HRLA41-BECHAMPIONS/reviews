const dbHelpers = require('./index.js');

const items = ['hoodie', 'shirt', 'product', 'pair of shorts', 'pair of socks', 'pair of pants'];
// const users = ['kevin', 'bob', 'greg', 'matthew', 'jason', 'sam', 'trent', 'vini', 'ant', 'smith', 'dogo', 'rob', 'joshua', 'charmander', 'ashe', 'pika', 'peace'];
const users = ['DoubleCheckYouAreNotZoomedInWhileDoingCSS','iLOVEcss', 'scrimba', 'jQueryisgreatSike','HelpDesk', 'CovidSucks', 'HiHrLA41Seniors', 'HelloHRLA42Juniors', 'ilovebobatea', 'TrentIsaGOD', 'HireMeChampion', 'JulianIsFamous?!', 'HireMeNetflix', 'HireMeFacebook', 'HireMeGoogle', 'VenmoMe$5BucksIfYouSeeThis', 'DivDivDivDivDiv', 'MyBrainIsDone', 'iBrokeMyCode', 'CtrlC+CtrlV'];
const emails = ['@yahoo.com', '@gmail.com', '@outlook.com', '@aol.com', '@microsoft.com', '@hackreactor.com'];
const numbers = [3, 5, 10, 203, 121, 32, 88, 433, 23, 2, 4, 8, 123, 11, 17, 35, 91, 56, 69, 48, 57, 1];
const colors = ['red', 'black', 'purple', 'orange', 'yellow', 'pink', 'maroon', 'olive', 'blue', 'turquoise', 'white'];
const responses = ['Yes this color is available', 'No this color is not available for this product']

const randomizer = (arr) => {
  var output = arr[Math.floor(Math.random() * arr.length)];
  return output;
}

const createAnswer = () => {
  let answer = {};

  answer.description = randomizer(responses);
  answer.createdAt = randomizer(numbers)
  answer.user = randomizer(users) + randomizer(numbers).toString();
  answer.email = randomizer(users) + randomizer(numbers).toString() + randomizer(emails);

  return answer;
}

const generateAnswers= () => {
  const answers = [];
  for (var i = 0; i < 50; i++) {
    answers.push(createAnswer())
  }
  return answers;
}

const sampleData = generateAnswers();

// dbHelpers.Answer.create(sampleData)
//   .then(() => {
//     console.log('Seeded Database!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
