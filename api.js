const axios = require("axios");

const apiMarvel = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params: {
    api_key: "45c2a79cd09e4810e2233d11f831a40e",
  },
});

// const api = axios.create({
//   baseURL: "https://pokeapi.co/api/v2/",
// });

module.exports = 
    apiMarvel

