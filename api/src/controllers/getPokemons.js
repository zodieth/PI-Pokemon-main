const axios = require("axios");
// const { default: fetch } = require("node-fetch");
const fetch = require("node-fetch");
const { LOCK } = require("sequelize");
const { Pokemon, Type } = require("../db");
const { getAllTypes } = require("./getTypes");

async function getAllPokemons() {
  const typeDb = await Type.findAll();
  if (!typeDb.length) {
    await getAllTypes();
  }

  const firstPetition = async () => {
    const api1 = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((data) => data.results)
      .then(
        async (data) =>
          await data.map(async (e) => {
            const url1 = await fetch(e.url);
            const data1 = await url1.json();
            // ----------------------
            const url2 = await fetch(data1.forms[0].url);
            const data2 = await url2.json();
            return {
              name: e.name,
              img: data2.sprites.front_default,
              id: data2.id,
              type:
                data2.types[0] && data2.types[1] && data2.types[2]
                  ? [
                      data2.types[0].type.name,
                      data2.types[1].type.name,
                      data2.types[2].type.name,
                    ]
                  : data2.types[0] && data2.types[1]
                  ? [data2.types[0].type.name, data2.types[1].type.name]
                  : data2.types[0]
                  ? [data2.types[0].type.name]
                  : "nothing",
              health: data1.stats[0].base_stat,
              attack: data1.stats[1].base_stat,
              defense: data1.stats[2].base_stat,
              velocity: data1.stats[3].base_stat,
              height: data1.height,
              weight: data1.weight,
            };
          })
      )
      .then(async (data) => await Promise.all(data))
      .then((data) => data);

    return api1;
  };

  const secondPetition = async () => {
    const api2 = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then(async (data) => await fetch(data.next))
      .then((res) => res.json())
      .then((data) => data.results)
      .then(
        async (data) =>
          await data.map(async (e) => {
            const url1 = await fetch(e.url);
            const data1 = await url1.json();
            // ----------------------
            const url2 = await fetch(data1.forms[0].url);
            const data2 = await url2.json();
            return {
              name: e.name,
              img: data2.sprites.front_default,
              id: data2.id,
              type:
                data2.types[0] && data2.types[1] && data2.types[2]
                  ? [
                      data2.types[0].type.name,
                      data2.types[1].type.name,
                      data2.types[2].type.name,
                    ]
                  : data2.types[0] && data2.types[1]
                  ? [data2.types[0].type.name, data2.types[1].type.name]
                  : data2.types[0]
                  ? [data2.types[0].type.name]
                  : "nothing",
              health: data1.stats[0].base_stat,
              attack: data1.stats[1].base_stat,
              defense: data1.stats[2].base_stat,
              velocity: data1.stats[3].base_stat,
              height: data1.height,
              weight: data1.weight,
            };
          })
      )
      .then(async (data) => await Promise.all(data))
      .then((data) => data);

    return api2;
  };

  const getDb = async () => {
    try {
      const results = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      return results;
    } catch (err) {
      console.log(err);
    }
  };

  const firstReq = await firstPetition();
  const secondReq = await secondPetition();
  const getAllDatabase = await getDb();
  const info = getAllDatabase.concat(firstReq).concat(secondReq);

  return info;
}

async function getPokemonById(id) {
  try {
    const pokemons = await getAllPokemons();
    if (id) {
      const filter = pokemons.find((e) => e.id == id);
      return filter;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPokemonByName(name) {
  try {
    const pokemons = await getAllPokemons();
    if (name) {
      const filter = pokemons.find((e) => e.name == name);
      return filter;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
};
