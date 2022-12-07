const axios = require("axios");
const { Type } = require("../db");

async function getAllTypes() {
  const typeDb = Type.findAll();

  if (!typeDb.length) {
    const types = await axios
      .get("https://pokeapi.glitch.me/v1/types")
      .then((res) => res.data);
    //cambiar la api

    const map = types.map((e) => {
      return {
        name: e,
      };
    });

    Type.bulkCreate(map);
    return map;
  } else {
    return typeDb;
  }
}
module.exports = {
  getAllTypes,
};
