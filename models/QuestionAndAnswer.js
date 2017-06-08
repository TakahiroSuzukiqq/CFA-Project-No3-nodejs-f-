const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuestionAndAnswerSchema = new Schema ({
	  answers: [{
			qa_key: String,
			name: String,
			userAnswer: String,
			answers: Array
}]
}
);

const QuestionAndAnswer = mongoose.model('QuestionAndAnswer', QuestionAndAnswerSchema);

module.exports = QuestionAndAnswer;
