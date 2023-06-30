// build your `/api/resources` router here
const resourcesRouter = require("express").Router();
const Resources = require("./model");

resourcesRouter.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.get();
    res.status(200).json(resources);
  } catch (err) {
    next(err);
  }
});

resourcesRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await Resources.getResourceById(id);
    res.status(200).json(resource);
  } catch (err) {
    next(err);
  }
});

resourcesRouter.post("/", async (req, res, next) => {
  try {
    const something = await Resources.post(req.body);
    res.status(201).json(something);
  } catch (err) {
    next(err);
  }
});

resourcesRouter.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "Something went wrong inside the resources router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = resourcesRouter;
