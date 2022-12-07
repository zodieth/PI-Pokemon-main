const postPokemonMiddleware = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    // alert("Name is required");
    res.status(404).send("Name is required");
  }
  next();
};

module.exports = postPokemonMiddleware;
