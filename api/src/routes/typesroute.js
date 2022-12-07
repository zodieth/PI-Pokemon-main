const { Router } = require("express");
const { getAllTypes } = require("../controllers/getTypes");

const typesRouter = Router();

module.exports = typesRouter;

typesRouter.get("/", async (req, res) => {
  const tipo = await getAllTypes();
  res.json(tipo);
});
