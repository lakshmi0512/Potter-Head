const dotenv = require("dotenv");
dotenv.config("env");

module.exports = {
  KEY: process.env.KEY,
  BASE_URL: process.env.BASE_URL,
};
