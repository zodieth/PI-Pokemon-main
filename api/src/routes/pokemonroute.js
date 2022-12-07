const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
} = require("../controllers/getPokemons");
const postPokemonMiddleware = require("../middleware/post");
const { Pokemon, Type } = require("../db");

const PokemonRouter = Router();

PokemonRouter.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const nameDb = await getPokemonByName(name);
    res.json(nameDb);
  } else {
    const data = await getAllPokemons();
    res.json(data);
  }
});

PokemonRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getPokemonById(id);
  res.json(data);
});

PokemonRouter.post("/", postPokemonMiddleware, async (req, res) => {
  const { name, type } = req.body;
  const newPokemon = await Pokemon.create({
    name: name,
    type: type,
  });

  // const db = await Type.findAll({
  //   where: {
  //     name: type,
  //   },
  // });

  // await newPokemon.addType(db);
  res.json(newPokemon);
});

module.exports = PokemonRouter;
