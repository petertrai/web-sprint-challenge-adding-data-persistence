// build your `/api/resources` router here
const projectsRouter = require("express").Router();
const Projects = require("./model");

projectsRouter.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.get();
    const formattedProjects = projects.map((project) => {
      return {
        ...project,
        project_completed: project.project_completed === 1 ? true: false
      }
    });
    res.status(200).json(formattedProjects);
  } catch (err) {
    next(err);
  }
});

projectsRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Projects.getProjectById(id);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
});

projectsRouter.post("/", async (req, res, next) => {
  try {
    const something = await Projects.post(req.body);
    if (something.project_completed === 0) {
      something.project_completed = false;
    } else if (something.project_completed === 1) {
      something.project_completed = true;
    }
    res.status(201).json(something);
  } catch (err) {
    next(err);
  }
});

projectsRouter.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "Something went wrong inside the projects router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = projectsRouter;
