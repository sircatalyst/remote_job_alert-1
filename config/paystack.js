const paystack = request => {
	// const MySecretKey = 'Bearer sk_test_a66878c14f256d4f84f31591e07280d6d18b78b4';  //not mine

	const verifyPayment = (ref, mycallback) => {
		const options = {
			url: 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
			headers: {
				authorization: MySecretKey,
				'content-type': 'application/json',
				'cache-control': 'no-cache',
			},
		};
		const callback = (error, response, body) => {
			return mycallback(error, body);
		};
		request(options, callback);
	};

	return { verifyPayment };
};

module.exports = paystack;
