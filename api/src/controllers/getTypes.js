const axios = require("axios");
const fetch = require("node-fetch");
const { Type } = require("../db");

// async function getAllTypes() {
//   const typeDb = Type.findAll();

//   if (!typeDb.length) {
//     const types = await axios
//       .get("https://pokeapi.glitch.me/v1/types")
//       .then((res) => res.data);
//     //cambiar la api

//     const map = types.map((e) => {
//       return {
//         name: e,
//       };
//     });

//     Type.bulkCreate(map);
//     return map;
//   } else {
//     return typeDb;
//   }
// }

async function getAllTypes() {
  const typeDb = Type.findAll();
  if (!typeDb.length) {
    const types = [];

    await fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then(
        async (data) =>
          await data.results.map((e) => {
            return { name: e.name };
          })
      )
      .then((map) => types.push(map));

    return types[0];
  } else {
    return typeDb;
  }
}

module.exports = {
  getAllTypes,
};
