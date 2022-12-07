const { Router } = require("express");
const {
  getAllPokemons,
  fetchPokemons,
  pokemons,
  getpoke,
} = require("../controllers/getPokemons");

const PokemonRouter = Router();

PokemonRouter.get("/", async (req, res) => {
  // await getpoke();
  res.json(pokemons);
});

module.exports = PokemonRouter;
