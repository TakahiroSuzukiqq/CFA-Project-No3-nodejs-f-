var express = require('express');
var router = express.Router();

const Questionnaire = require('../models/Questionnaire');
const QuestionnaireController = require('../controllers/QuestionnaireController');

router.get('/', QuestionnaireController.getQuestionnaires);
router.post('/', QuestionnaireController.getNewQuestionnaires);
router.get('/questionnaires/:id/edit', QuestionnaireController.getEditQuestionnaires);
router.post('/questionnaires/:id/edit', QuestionnaireController.postEditQuestionnaires);
router.get('/questionnaires/:id/delete', QuestionnaireController.getDeleteQuestionnaires);

module.exports = router;
