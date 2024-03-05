// netlify-functions/sendEmail.js

const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const { name, email, message } = event.queryStringParameters || {};

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [email, process.env.EMAIL_USER],
      subject: 'Contact Form Submission',
      text: `Thank you ${name} for reaching out to me, Raymond Chen.\n` +
        'This message is a confirmation of contacting me\n' +
        `Message: ${message}`,
    };

    console.log("MAIL OPS".mailOptions);
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', info }),
    };
  } catch (error) {
    // console.log("Dummy.",mailOptions);
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};
