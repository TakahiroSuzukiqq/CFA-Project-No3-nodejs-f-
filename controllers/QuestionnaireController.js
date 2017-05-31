const mongoose = require('mongoose');
const Questionnaire = require('../models/Questionnaire');


// ####Get Questionnarie####
exports.getQuestionnaires = (req, res) => {
	Questionnaire.find()
		.then((questionnaires) => {
			res.render('questionnaire', {
				title: 'Questionnaires',
				questionnaires: questionnaires
			})
		})
};

// ####Post NewQuestionnarie####
exports.getNewQuestionnaires = (req, res) => {
	// console.log('TESTreq.body is:', req.body);
	const name = req.body.questionnaire_name;
	let questionnaire = new Questionnaire();
	questionnaire.name = name;
	questionnaire.save()
		.then(() => {
			res.redirect('/questionnaire')
		})
};

// ####Edit Questionnarie####
exports.getEditQuestionnaires = (req, res) => {
	// console.log('req.body:', req.body);
	Questionnaire.findOne({ _id: req.params.id })
		.then(questionnaire => {
			res.render('EditQuestionnaire', {questionnaire: questionnaire});
		})
};

// ####Post Edited Questionnarie####
exports.postEditQuestionnaires = (req, res) => {
	// console.log('req.body:', req.body);
	Questionnaire.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true
	})
		.then(questionnaire => {
			res.redirect('/questionnaire')
		})
};

// ####Delete Questionnarie####
exports.getDeleteQuestionnaires = (req, res) => {
	Questionnaire.findByIdAndRemove(req.params.id,
	 (err, questionnaire) => {
			res.redirect('/questionnaire')
		});
};
