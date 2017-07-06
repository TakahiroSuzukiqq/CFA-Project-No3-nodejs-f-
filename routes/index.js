var express = require('express');
var router = express.Router();


/* #GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard for ICN' });
});
//

//* #dashboard questionnaire page */
const Questionnaire = require('../models/Questionnaire');
const QuestionnaireController = require('../controllers/QuestionnaireController');

router.get('/questionnaire', QuestionnaireController.getQuestionnaires);
router.post('/questionnaire', QuestionnaireController.getNewQuestionnaires);
router.get('/questionnaire/:id/edit', QuestionnaireController.getEditQuestionnaires);
router.post('/questionnaire/:id/edit', QuestionnaireController.postEditQuestionnaires);
router.get('/questionnaire/:id/delete', QuestionnaireController.getDeleteQuestionnaires);

router.get('/api/questionnaire', QuestionnaireController.getQuestionnairesApi);
router.post('/api/questionnaire', QuestionnaireController.getNewQuestionnairesApi);
router.get('/api/questionnaire/:id', QuestionnaireController.getEditQuestionnairesApi);
router.delete('/api/questionnaire/:id', QuestionnaireController.getDeleteQuestionnairesApi);


/*/#user answer form react */
const QuestionAndAnswer = require('../models/QuestionAndAnswer');
const QuestionAndAnswerController = require('../controllers/QuestionAndAnswerController');
const axios = require('axios');

// router.post('/reactApi', QuestionAndAnswer.postReactApi);
router.get('/answers', QuestionAndAnswerController.getAnswers);
router.post('/api/answers', QuestionAndAnswerController.postAnswersApi);


//* #twitter
// router.post('/get_users', TweetController.postTweet);

//
//
// t.get("/1/members/me", function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });
//
// // URL arguments are passed in as an object.
// t.get("/1/members/me", { cards: "open" }, function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });
//
//
// */


module.exports = router;
