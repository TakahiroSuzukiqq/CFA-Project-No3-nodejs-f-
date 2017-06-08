const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuestionnaireSchema = new Schema ({
	name: {
		type: String,
		trim: true
	},
	question_type: {
		type: String
		// default: "string"
	},
	qa_key: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	},
});

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);

module.exports = Questionnaire;
