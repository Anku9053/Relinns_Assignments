const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs')
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const sendMail = async (to, subject, templateName, templateData) => {
  try {
      console.log('Sending email with data:', templateData); // Add this line to debug
      const templatePath = path.join(__dirname, 'templates', `${templateName}.ejs`);
      const htmlContent = await ejs.renderFile(templatePath, templateData);
      const template = fs.readFileSync(templatePath, 'utf8');

      const mailOptions = {
          from: process.env.MAIL_USER,
          to,
          subject,
          html: htmlContent
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info);
  } catch (error) {
      console.error('Error in sendMail:', error);
  }
};



module.exports = sendMail;
