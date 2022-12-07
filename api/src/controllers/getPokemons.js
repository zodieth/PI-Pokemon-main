const axios = require("axios");
const e = require("express");
const fetch = require("node-fetch");

// async function getAleeelPokemons(limit = 100) {
//   const baseURL = "https://pokeapi.co/api/v2/";

//   const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=0`);
//   const data = await res.json();
//   const promises = data.results.map(async (pokemon) => {
//     // const res = await fetch(pokemon.url);
//     // const data = await res.json();
//     // return data;
//     const imgapi = await fetch(
//       `https://pokeapi.co/api/v2/pokemon-form/${pokemon.name}`
//     );

//     return {
//       name: pokemon.name,
//       img: imgapi,
//     };
//   });

//   const results = await Promise.all(promises);
//   return results;
// }

async function fetchPokemons(num) {
  for (let i = 1; i <= num; i++) {
    getAllPokemons(i);
  }
}

fetchPokemons(100);

const pokemons = [];

async function getAllPokemons(id) {
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(`${baseURL}`);
  const data = await res.json();

  pokemons.push(data.forms);
}

module.exports = {
  getAllPokemons,
  fetchPokemons,
  pokemons,
};
