const axios = require("./axios");
const LordOfTheRings = require("./index");
const MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);

let api = new LordOfTheRings();

mock.onGet().reply(200, {
  data: [{ id: 1, title: "The Fellowship of the Ring" }, { id: 2, title: "The Two Towers" }],
});

describe("LordOfTheRingsAPI", () => {

  describe("getMovies", () => {

    it("should return the movies data", async () => {

      const movies = await api.getMovies();
      expect(movies).toEqual({
        data: [{ id: 1, title: "The Fellowship of the Ring" }, { id: 2, title: "The Two Towers" }],
      });
    });
  });

});
