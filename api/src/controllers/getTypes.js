const axios = require("axios");

async function getAllTypes() {
  const types = await axios.get("https://pokeapi.co/api/v2/type");

  // const array = Array.from(types);

  // const map = array.results.map((e) => {
  //   return {
  //     name: e.name,
  //   };
  // });
}
module.exports = {
  getAllTypes,
};
