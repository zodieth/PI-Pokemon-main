const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
} = require("../controllers/getPokemons");
const postPokemonMiddleware = require("../middleware/post");
const { Pokemon, Type, pokemon_Type } = require("../db");
const { getAllTypes } = require("../controllers/getTypes");

const PokemonRouter = Router();

PokemonRouter.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const nameDb = await getPokemonByName(name);
    if (!nameDb) {
      res.json({
        name: "NOT FOUND",
        img: "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png",
        type: ["NOT FOUND"],
      });
    } else {
      res.json(nameDb);
    }
  } else {
    const data = await getAllPokemons();
    res.json(data);
  }
});

PokemonRouter.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getPokemonById(id);
  if (!data) {
    res.json({
      name: "NOT FOUND",
      img: "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png",
      type: ["NOT FOUND"],
    });
  } else {
    res.json(data);
  }
});

PokemonRouter.post("/", postPokemonMiddleware, async (req, res) => {
  const { name, type, img, health, attack, defense, velocity, height, weight } =
    req.body;

  try {
    // const db = await Pokemon.findAll({
    //   where: {
    //     name: name,
    //   },
    // });

    // if (!db) {
    const newPokemon = await Pokemon.create({
      name: name.toLowerCase(),
      type: type,
      img: img,
      health,
      attack,
      defense,
      velocity,
      height,
      weight,
    });

    const typePoke = await Type.findAll({
      where: {
        name: type,
      },
    });

    newPokemon.addType(typePoke);

    res.json("CREATED");
  } catch (error) {
    res.send("POKEMON WITH THAT NAME ALREADY EXISTS");
  }
});

module.exports = PokemonRouter;
