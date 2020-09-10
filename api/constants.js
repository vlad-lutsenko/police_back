require("dotenv").config();

module.exports = {
  mongoDBUrl: process.env.mongoDBURL,
  PORT: process.env.PORT,
  mailSender: process.env.mailSender,
  mailSenderPass: process.env.mailSenderPass,
};
