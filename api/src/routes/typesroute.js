const { Router } = require("express");
const { getAllTypes } = require("../controllers/getTypes");

const typesRouter = Router();

module.exports = typesRouter;

typesRouter.get("/", async (req, res) => {
  //   try {
  //     const types = await getTypes();
  //     res.json(types);
  //   } catch (error) {
  //     res.status(404).send(error);
  //   }
  const tipo = await getAllTypes();
  res.json(tipo);
});
