const axios = require("axios");
// const { default: fetch } = require("node-fetch");
const fetch = require("node-fetch");
const { Pokemon } = require("../db");
const { getAllTypes } = require("./getTypes");

// async function getAllPokemons() {
//   await getAllTypes();

//   try {
//     const pokemonsDb = await Pokemon.findAll();

//     if (pokemonsDb.length) {
//       return pokemonsDb;
//     }

//     if (!pokemonsDb.length) {
//       const baseURL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100`;
//       const res = await fetch(`${baseURL}`);
//       const data = await res.json();

//       const map = data.results.map(async (e) => {
//         return {
//           name: e.name,
//         };
//       });
//       Pokemon.bulkCreate(map);
//       const pokemonsDb = Pokemon.findAll();

//       console.log("DB Created");
//       return pokemonsDb;
//     }
//   } catch (error) {
//     res.status.send(error);
//   }
// }

async function getAllPokemons() {
  const pokemonDb = await Pokemon.findAll();
  if (!pokemonDb.length) {
    const baseURL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=90`;

    const info = [];

    await fetch(baseURL)
      .then((res) => res.json())
      .then(
        async (data) =>
          await data.results.map(async (e) => {
            const url1 = await fetch(e.url);
            const data1 = await url1.json();
            // ----------------------
            const url2 = await fetch(data1.forms[0].url);
            const data2 = await url2.json();

            return {
              name: e.name,
              img: data2.sprites.front_default,
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
          })
      )
      .then(async (data) => await Promise.all(data))

      .then((data) => info.push(data));

    // return info;

    await Pokemon.bulkCreate(info[0]);
    const pokemonsDb = await Pokemon.findAll();

    console.log("DB Created");
    return pokemonsDb;
  } else {
    return pokemonDb;
  }
}

async function getPokemonById(id) {
  // const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  // const res = await fetch(`${baseURL}`);
  // const data = await res.json();

  // const sprite = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);

  // const spiteJson = await sprite.json();

  // const map = data.forms.map((e) => {
  //   return {
  //     name: e.name,
  //     img: spiteJson.sprites.front_default,
  //   };
  // });

  // return map;
  const pokemonById = Pokemon.findAll({
    where: {
      id: id,
    },
  });

  return pokemonById;
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
