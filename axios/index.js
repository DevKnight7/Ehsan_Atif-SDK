const axios = require('axios')

module.exports = axios.create({
    baseURL: "https://the-one-api.dev/v2/movie",
    headers: {
      Authorization : `Bearer eNgKpEbeLsnFYuBQ_FTG`
      }
  });