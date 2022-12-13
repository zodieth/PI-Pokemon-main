const axios = require("axios");
// const { default: fetch } = require("node-fetch");
const fetch = require("node-fetch");
const { Pokemon, Type } = require("../db");
const { getAllTypes } = require("./getTypes");

async function getAllPokemons() {
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
              life: data1.stats[0].base_stat,
              strength: data1.stats[1].base_stat,
              defense: data1.stats[2].base_stat,
              speed: data1.stats[3].base_stat,
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
              life: data1.stats[0].base_stat,
              strength: data1.stats[1].base_stat,
              defense: data1.stats[2].base_stat,
              speed: data1.stats[3].base_stat,
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
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(`${baseURL}`);
  const data = await res.json();

  const sprite = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);

  const spiteJson = await sprite.json();
  const data2 = await spiteJson;

  const map = data.forms.map((e) => {
    return {
      name: e.name,
      img: spiteJson.sprites.front_default,
      id: spiteJson.id,
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
    };
  });

  return map;
}

async function getPokemonByName(name) {
  // const pokemonsDb = Pokemon.findAll({
  //   where: {
  //     name: name,
  //   },
  // });

  // return pokemonsDb;

  const baseURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await fetch(`${baseURL}`);
  const data = await res.json();

  const sprite = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${name}`);

  const spiteJson = await sprite.json();

  const map = data.forms.map((e) => {
    return {
      name: e.name,
      img: spiteJson.sprites.front_default,
    };
  });

  return map;
}

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
};
