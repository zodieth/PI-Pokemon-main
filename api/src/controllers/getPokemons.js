const axios = require("axios");
const fetch = require("node-fetch");
const { Pokemon } = require("../db");
const { getAllTypes } = require("./getTypes");

async function getAllPokemons() {
  await getAllTypes();

  try {
    const pokemonsDb = await Pokemon.findAll();

    if (pokemonsDb.length) {
      return pokemonsDb;
    }

    if (!pokemonsDb.length) {
      const baseURL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100`;
      const res = await fetch(`${baseURL}`);
      const data = await res.json();

      const map = data.results.map((e) => {
        return {
          name: e.name,
        };
      });
      Pokemon.bulkCreate(map);
      const pokemonsDb = Pokemon.findAll();

      console.log("DB Created");
      return pokemonsDb;
    }
  } catch (error) {
    res.status.send(error);
  }
}

async function getPokemonById(id) {
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(`${baseURL}`);
  const data = await res.json();

  const sprite = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);

  const spiteJson = await sprite.json();

  const map = data.forms.map((e) => {
    return {
      name: e.name,
      img: spiteJson.sprites.front_default,
    };
  });

  return map;
}

async function getPokemonByName(name) {
  const pokemonsDb = Pokemon.findAll({
    where: {
      name: name,
    },
  });

  return pokemonsDb;
}

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
};
