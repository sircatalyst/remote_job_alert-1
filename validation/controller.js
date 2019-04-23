/* eslint-disable no-param-reassign */
var Validator = require('validator');
var isEmpty = require('./is-empty');

const validateQueryText = data => {
	const errors = {};

	data.company_name = !isEmpty(data.company_name) ? data.company_name : '';
	data.job_title = !isEmpty(data.job_title) ? data.job_title : '';
	data.job_link = !isEmpty(data.job_link) ? data.job_link : '';
	data.job_description = !isEmpty(data.job_description) ? data.job_description : '';
	data.employer_email = !isEmpty(data.employer_email) ? data.employer_email : '';
	data.job_pay_min = !isEmpty(data.job_pay_min) ? data.job_pay_min : '';
	data.job_pay_max = !isEmpty(data.job_pay_max) ? data.job_pay_max : '';
	data.career_level = !isEmpty(data.career_level) ? data.career_level : '';
	data.location = !isEmpty(data.location) ? data.location : '';
	data.image_link = !isEmpty(data.image_link) ? data.image_link : '';

	if (Validator.isEmpty(data.company_name)) {
		errors.company_name = 'Company Name  is required';
	}
	if (Validator.isEmpty(data.job_title)) {
		errors.job_title = 'The job title is required';
	}
	if (Validator.isEmpty(data.job_link)) {
		errors.job_link = 'Job link is required';
	}
	if (Validator.isEmpty(data.job_description)) {
		errors.job_description = 'Job Description is required';
	}
	if (Validator.isEmpty(data.employer_email)) {
		errors.employer_email = 'Employer Email is required';
	}
	if (Validator.isEmpty(data.job_pay_min)) {
		errors.job_pay_min = 'Job minimum pay is required';
	}
	if (Validator.isEmpty(data.job_pay_max)) {
		errors.job_pay_max = 'Job maximum pay is required';
	}
	if (Validator.isEmpty(data.career_level)) {
		errors.career_level = 'Job career level is required';
	}
	if (Validator.isEmpty(data.location)) {
		errors.location = 'Job location is required';
	}
	if (Validator.isEmpty(data.image_link)) {
		errors.image_link = 'A relevant image link is required';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};

module.exports = validateQueryText;
