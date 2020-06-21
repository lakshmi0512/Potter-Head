const dotenv = require("dotenv").config();


module.exports = {
  POTTERAPI_KEY: process.env.HARRY_POTTER_API_KEY,
  BASE_URL: "https://www.potterapi.com/v1/",
};
