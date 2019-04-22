const _ = require('lodash');
const request = require('request');
const db = require('./promise').DbAgent;

const secretKey = 'replace this witht the secret key below';
// const secretKey = 'sk_test_a66878c14f256d4f84f31591e07280d6d18b78b4';

const paystack = require('paystack')(secretKey);

const { Payment } = require('../models/payment');

const { verifyPayment } = require('../config/paystack')(request);

const Paystack = {
	async pay(req, res) {
		try {
			const amount = 500000; //#5000 Naira
			const email = req.body.email;

			const response = await paystack.transaction.initialize({ amount, email });
			res.redirect(response.data.authorization_url);
		} catch (err) {
			next(err);
		}
	},

	async verifyMoney(req, res) {
		const ref = req.query.reference;
		verifyPayment(ref, (error, body) => {
			if (error) {
				return res.status(400).send(error);
			}
			response = JSON.parse(body);

			const data = _.at(response.data, ['reference', 'amount', 'customer.email']);

			[reference, amount, email] = data;
			newPayment = { reference, amount, email };
			const payment = new Payment(newPayment);

			payment
				.save()
				.then(payment => {
					if (!payment) {
						req.flash('paymentError', 'Payment not successful');
						return res.redirect('/');
					}
					console.log('good');
					res.redirect('receipt/' + payment._id);
				})
				.catch(e => {
					return res.status(400).send(e);
				});
		});
	},

	async redirect(req, res) {
		const id = req.params.id;
		Payment.findById(id)
			.then(payment => {
				if (!payment) {
					req.flash('paymentError', 'Payment not successful');
					return res.redirect('/');
				}
				console.log(payment);
				req.flash('payment', 'Payment successful, Please kindly fill the form below to continue');
				return res.redirect('/applicant');
			})
			.catch(e => {
				return res.status(400).send(e);
			});
	},
};

module.exports = Paystack;
