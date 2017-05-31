var express = require('express');
var router = express.Router();

const Questionnaire = require('../models/Questionnaire');
const QuestionnaireController = require('../controllers/QuestionnaireController');

router.get('/', QuestionnaireController.getQuestionnaires);
router.post('/', QuestionnaireController.getNewQuestionnaires);
router.get('/:id/edit', QuestionnaireController.getEditQuestionnaires);
router.post('/:id/edit', QuestionnaireController.postEditQuestionnaires);
router.get('/:id/delete', QuestionnaireController.getDeleteQuestionnaires);

module.exports = router;
