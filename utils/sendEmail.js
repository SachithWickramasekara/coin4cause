const nodemailer = require("nodemailer");
const { getMaxListeners } = require("../userDetails");
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = async (email, subject, text) => {
	try {
		console.log("Enter uname and pass");
		const transporter = nodemailer.createTransport(smtpTransport({
			host: 'smtp.gmail.com',
			service: 'gmail',
			
			auth: {
				user: '',
				pass: '',
			},
		}));

		await transporter.sendMail({
			from: 'dinujaya.20210418@iit.ac.lk',
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
