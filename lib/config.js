// Load environment variables from .env file
require("dotenv").config();

const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: "unix",
  path: "/usr/sbin/sendmail",
};

const SMTP_TRANSPORT = {
  // This is a Nodemailer transport. It can either be an SMTP server or a
  // well-known service such as Sengrid, Mailgun, Gmail, etc.
  // See https://nodemailer.com/transports/ and https://nodemailer.com/smtp/well-known/
  host: process.env.SENDGRID_SERVER_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  secureConnection: "false",
  tls: {
    ciphers: "SSLv3",
  },
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"Ryan" <ryan.mix97@gmail.com>',
  },
  debugEnabled: false,
};
