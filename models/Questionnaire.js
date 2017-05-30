const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuestionnaireSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);

module.exports = Questionnaire;
