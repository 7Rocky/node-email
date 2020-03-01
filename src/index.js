const fs = require('fs');
const nodemailer = require('nodemailer');

const { EMAIL_FILE, PASSWORD, RECEIVER, SENDER, SUBJECT } = require('./constants/constants');

const transportOptions = {
  auth: {
    pass: PASSWORD,
    user: SENDER
  },
  host: 'smtp.gmail.com',
  port: 587,
  requireTLS: true,
  secure: false,
  service: 'gmail'
};

const readFile = async file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  })
};

const sendEmail = async (email, subject) => {
  const transporter = nodemailer.createTransport(transportOptions);

  const mailOptions = {
    from: SENDER,
    html: email,
    subject,
    to: RECEIVER
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  try {
    const email = await readFile(`templates/${EMAIL_FILE}`);
    sendEmail(email, SUBJECT);
  } catch (error) {
    console.log(error);
  }
})();
