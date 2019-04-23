const Jobs = require('../models/jobs');
const Users = require('../models/user');
const Agent = require('../models/agent');
const Applicant = require('../models/applicant');
const Payment = require('../models/payment');

class Db {
	/**
	 * @param {string} text
	 * @returns {object} Return all
	 */
	static find(param) {
		return new Promise((resolve, reject) => {
			Jobs.find(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static findOne(param) {
		return new Promise((resolve, reject) => {
			Jobs.findOne(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static findOneAndUpdate(param, text) {
		return new Promise((resolve, reject) => {
			Jobs.findOneAndUpdate(param, text)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static findOneAndDelete(param) {
		return new Promise((resolve, reject) => {
			Jobs.findOneAndDelete(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static create(param) {
		return new Promise((resolve, reject) => {
			Jobs.create(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static countDocuments(param) {
		return new Promise((resolve, reject) => {
			Jobs.countDocuments(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
}

class DbApplicant {
	/**
	 * @param {string} text
	 * @returns {object} Return all
	 */
	static find(param) {
		return new Promise((resolve, reject) => {
			Applicant.find(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static create(param) {
		return new Promise((resolve, reject) => {
			Applicant.create(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	static findOneAndDelete(param) {
		return new Promise((resolve, reject) => {
			Applicant.findOneAndDelete(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
}

class Pay {
	/**
	 * @param {string} text
	 * @returns {object} Return all
	 */
	static find(param) {
		return new Promise((resolve, reject) => {
			Payment.find(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static create(param) {
		return new Promise((resolve, reject) => {
			Payment.create(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	static save(param) {
		return new Promise((resolve, reject) => {
			Payment.save(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	static findOneAndDelete(param) {
		return new Promise((resolve, reject) => {
			Payment.findOneAndDelete(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
}

module.exports = {
	Db,
	DbApplicant,
	Pay,
};
