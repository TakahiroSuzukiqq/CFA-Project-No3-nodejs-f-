const mongoose = require('mongoose');
const Questionnaire = require('../models/Questionnaire');


// ####Get Questionnarie####
exports.getQuestionnaires = (req, res) => {
	Questionnaire.find()
		.then((questionnaires) => {
			res.render('Questionnaire', {
				title: 'Questionnaires',
				questionnaires: questionnaires
			})
		})
};

// ####Post NewQuestionnarie####
exports.getNewQuestionnaires = (req, res) => {
	console.log('req.body is:', req.body);
	const name = req.body.questionnaire_name;
	let questionnaire = new Questionnaire();
	questionnaire.name = name;
	questionnaire.save()
		.then(() => {
			res.redirect('/Questionnaire')
		})
};

// ####Edit Questionnarie####
exports.getEditQuestionnaires = (req, res) => {
	Questionnaire.findOne({ _id: req.params.id })
		.then(questionnaire => {
			res.render('EditQuestionnaire', {questionnaire: questionnaire});
		})
};

// ####Post Edited Questionnarie####
exports.postEditQuestionnaires = (req, res) => {
	console.log('reqy.body:', req.body);
	Questionnaire.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true
	})
		.then(questionnaire => {
			res.redirect('/Questionnaire')
		})
};

// ####Delete Questionnarie####
exports.getDeleteQuestionnaires = (req, res) => {
	Questionnaire.findOne({ _id: req.params.id })
    .remove((err, data) => {
			res.redirect('/Questionnaire')
		});
};
