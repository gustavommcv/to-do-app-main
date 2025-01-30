import { matchedData, validationResult } from "express-validator";
import TaskStatus from "../models/enums/TaskStatus.js";
import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const tasks = await Task.findAll({
      where: { userId }
    });
    
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks", message: error.message });
  }
};


export const getTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const { taskId } = matchedData(req);

    const task = await Task.findOne({
      where: { id: taskId, userId }
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error fetching task", message: error.message });
  }
};


export const getTaskStatus = async (req, res) => {
  try {
    const statuses = Object.values(TaskStatus);
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: "Error fetching task status", message: error.message });
  }
}

export const postTask = async (req, res) => {
  try {
    const errorsResult = validationResult(req);
    if (!errorsResult.isEmpty()) {
      return res.status(400).send({ errors: errorsResult.array() });
    }

    const userId = req.user.id;
    const task = matchedData(req);

    const newTask = await Task.create({
      ...task,
      userId
    });

    res.status(201).json({ message: `Task created: ${newTask.title}`, task: newTask });
  } catch (error) {
    res.status(500).json({ error: "Error creating task", message: error.message });
  }
};

export const putTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const { taskId, ...task } = matchedData(req);

    const errorsResult = validationResult(req);
    if (!errorsResult.isEmpty()) {
      return res.status(400).send({ errors: errorsResult.array() });
    }

    const selectedTask = await Task.findOne({
      where: { id: taskId, userId }
    });

    if (!selectedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    await selectedTask.update({
      title: task.title,
      description: task.description,
      status: task.status
    });

    await selectedTask.save();

    res.status(200).json({ message: `Task updated`, updatedTask: selectedTask });
  } catch (error) {
    res.status(500).json({ error: "Error editing task", message: error.message });
  }
};


export const patchTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const errorsResult = validationResult(req);
    if (!errorsResult.isEmpty()) {
      return res.status(400).json({ errors: errorsResult.array() });
    }

    const { taskId } = matchedData(req);
    const updateFields = matchedData(req, { includeOptionals: true });
    delete updateFields.taskId;

    const task = await Task.findOne({
      where: { id: taskId, userId }
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.update(updateFields);
    await task.save();

    res.status(200).json({ message: 'Task updated successfully', updatedTask: task });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task', message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const { taskId } = matchedData(req);

    const errorsResult = validationResult(req);
    if (!errorsResult.isEmpty()) {
      return res.status(400).json({ errors: errorsResult.array() });
    }

    const task = await Task.findOne({
      where: { id: taskId, userId }
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.destroy();
    res.status(200).json({ message: `Task deleted successfully: ${task.title}` });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task', message: error.message });
  }
};

