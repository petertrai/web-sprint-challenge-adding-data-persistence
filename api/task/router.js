// build your `/api/resources` router here
const tasksRouter = require("express").Router();
const Tasks = require("./model");

tasksRouter.get("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.get();
    const formattedtasks = tasks.map((task) => {
      return {
        ...task,
        task_completed: task.task_completed === 1 ? true: false
      }
    });
    res.status(200).json(formattedtasks);
  } catch (err) {
    next(err);
  }
});

tasksRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Tasks.getTaskById(id);
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
});

tasksRouter.post("/", async (req, res, next) => {
  try {
    const something = await Tasks.post(req.body);
    if (something.task_completed === 0) {
      something.task_completed = false;
    } else if (something.task_completed === 1) {
      something.task_completed = true;
    }
    res.status(201).json(something);
  } catch (err) {
    next(err);
  }
});

tasksRouter.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "Something went wrong inside the tasks router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = tasksRouter;
