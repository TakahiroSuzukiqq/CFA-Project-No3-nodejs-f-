const mongoose = require('mongoose');
const QuestionAndAnswer = require('../models/QuestionAndAnswer');

//####API form React Controller ####
// exports.postReactApi = (req, res) => {
//   //axios.post('https://cfa-project-no3-nodejs-.herokuapp.com/api/questionnaire?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE')
// 		const questionKey = req.body.answers.qa_key;
// 		const questionName = req.body.answers.name;
// 		const quesitonAnswer   = req.body.answers.userAnswer;
//
// 		let reactApi = new ReactApi();
//
// 		reactApi.questionKey = answers.qa_key;
// 		reactApi.questionName = answers.name;
// 		reactApi.questionAnswer = answers.userAnswer;
//
// 	 .then((reactApi => {
// 		 res.render('reactApi', {
// 		 console.log('Question:', response.data.questions.answers.name);
// 		 console.log('Answer:', response.data.questionsanswers.userAnswer);
// 		 });
// 	  .catch(function (error) {
// 		 console.log(error);
// 	 })
//  )}
//  };

 exports.getAnswers = (req, res) => {
 	QuestionAndAnswer.find()
 		.then((answers) => {
 			res.render('answers', {
 				answers: answers,
 			})
 		})
 };

 exports.postAnswersApi = (req, res) => {
	//  const key = req.body.answers.qa_key;
 // 	 const name = req.body.answers.name;
 // 	 const userAnswer = req.body.answers.userAnswer;

    // console.log(answers)
 	  let questionAndAnswer = new QuestionAndAnswer();
   // 	questionAndAnswer.key = name;
   // 	questionAndAnswer.name = question_type;
   // 	questionAndAnswer.userAnswer = qa_key;
    questionAndAnswer.answers = req.body.answers
  	questionAndAnswer.save()
 		.then(() => {
 			//res.redirect('/api/answers')
			res.send(200)
 		})
 };
