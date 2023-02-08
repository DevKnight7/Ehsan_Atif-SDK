const axios = require('./axios')

class LordOfTheRings {
  constructor() {
    this.axios = axios
  }

  async getMovies() {
    try {
      const response = await this.axios.get();
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getMovieById(id) {
    try {
      const response = await this.axios.get(`/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  async getQuotesForMovie(id) {
    try {
      const response = await this.axios.get(`/${id}/quote`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = LordOfTheRings;
