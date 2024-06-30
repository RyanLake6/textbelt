const nodemailer = require("nodemailer");

let config = require("./config.js");

//----------------------------------------------------------------
/*
    General purpose logging function, gated by a configurable
    value.
*/
function output(...args) {
  if (config.debugEnabled) {
    // eslint-disable-next-line no-console
    console.log.apply(this, args);
  }
}

//----------------------------------------------------------------
/*  Sends an email message

    Params:
      email - email to send to
      subject - subject of the message
      message - the message to send
*/
async function sendEmail(email, subject, message) {
  output("emailing address", email, ":", message);

  const transporter = nodemailer.createTransport(config.transport);

  console.log("sending an email");

  const to = email;
  //const subject = subject;
  const text = message;

  const mailOptions = {
    from: '"ryan" ryan.mix97@gmail.com', // Replace with your verified sender email
    to: to,
    subject: subject,
    text: text,
  };

  console.log("sending");

  try {
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    return info;
  } catch (error) {
    return error;
  }
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       return res.status(500).send({
  //         success: false,
  //         message: "Failed to send email",
  //         error: error.toString(),
  //       });
  //     }
  //     res.send({ success: true, message: "Email sent", info: info });
  //   });

  console.log("after");
}

//----------------------------------------------------------------
/*  Overrides default config

    Takes a new configuration object, which is
    used to override the defaults

    Params:
      obj - object of config properties to be overridden
*/
function setConfig(obj) {
  config = Object.assign(config, obj);
}

module.exports = {
  send: sendEmail, // Send a text message
  config: setConfig, // Override default config
};
