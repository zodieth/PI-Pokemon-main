const postPokemonMiddleware = (req, res, next) => {
  const { name, type, img } = req.body;
  if (!name) {
    res.status(404).send("Name is required");
  }
  if (!type) {
    res.status(404).send("Type is required");
  }
  if (!img) {
    res.status(404).send("Image is required");
  }
  next();
};

module.exports = postPokemonMiddleware;
