const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
	phone: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: false,
	},
	amount: {
		type: Number,
		required: false,
	},
	reference: {
		type: String,
		required: false,
	},
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment };
