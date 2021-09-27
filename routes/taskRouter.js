const express = require("express");
const taskController = require("../controller/taskController.js");
const taskRouter = express.Router();

taskRouter.post("/create", taskController.addTask);
taskRouter.get("/", taskController.getTasks);
taskRouter.put("/update/:id", taskController.updateTasks);
taskRouter.delete("/delete/:id", taskController.deleteTasks);

module.exports = taskRouter;
