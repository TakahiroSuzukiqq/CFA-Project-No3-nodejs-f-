const mongoose = require('mongoose');
const QuestionAndAnswer = require('../models/QuestionAndAnswer');

 exports.getAnswers = (req, res) => {
 	QuestionAndAnswer.find()
 		.then((answers) => {
 			res.render('answers', {
 				answers: answers,
 			})
 		})
 };

 exports.postAnswersApi = (req, res) => {
     //const key = req.body.answers.qa_key;
  const name = req.body.answers.name;
     //const userAnswer = req.body.answers.userAnswer;

    // console.log(answers)
 	  let questionAndAnswer = new QuestionAndAnswer();
     //questionAndAnswer.key = qa_key
     //questionAndAnswer.name = name
     //questionAndAnswer.userAnswer = answerS

    questionAndAnswer.answers = req.body.answers
    // questionAndAnswer.name = req.body.answers[15].name
    console.log(req.body.answers)
    // console.log(req.body.answers[15].name)
    //questionAndAnswer.userAnswer = req.body.answers.userAnswer
  	questionAndAnswer.save()
 		.then(() => {
			res.send(200)
 		})
 };
