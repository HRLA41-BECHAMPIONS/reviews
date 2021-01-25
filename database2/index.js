const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('champion_questions_answers', 'root', 'Mysql123!', {
  host: 'localhost',
  dialect: 'mysql'
});

//model
const Question = sequelize.define('questions', {
  description: Sequelize.STRING,
  createdAt: Sequelize.STRING,
  user: Sequelize.STRING,
  email: Sequelize.STRING,
  responses: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

const Answer = sequelize.define('answers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    references: {
      model: Question, // foreign key to Question
      key: 'id'
    }
  },
  description: Sequelize.STRING,
  createdAt: Sequelize.STRING,
  user: Sequelize.STRING,
  email: Sequelize.STRING,
  yes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  no: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  report: {
    type: Sequelize.STRING,
    defaultValue: 'Report'
  }
});

// sequelize.drop()
Question.sync(); // creates the tables
Answer.sync();


module.exports.Question = Question;
module.exports.Answer = Answer;