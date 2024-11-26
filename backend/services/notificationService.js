// Email and reminders management 
// backend/services/notificationService.js

const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

// Send email notification
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to,
        subject,
        text,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendEmail,
};