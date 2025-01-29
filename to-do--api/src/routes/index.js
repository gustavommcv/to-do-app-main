import express from 'express';
import tasksRouter from './tasksRoutes.js';
import authRouter from './authRoutes.js';
import { authenticate } from '../middlewares/authMiddleware.js';
const router = express.Router();

// Default route
router.get('/', (req, res) => {
  res.json({
    message: "Welcome to the To-Do API!",
    endpoints: {
      "GET /api/tasks": "Retrieve all tasks",
      "GET /api/tasks/task-status": "Retrieve task statuses",
      "GET /api/tasks/:taskId": "Retrieve a task by ID (UUID required)",
      "POST /api/tasks": "Create a new task (title, description, and status required)",
      "PUT /api/tasks/:taskId": "Update an existing task (UUID required)",
      "PATCH /api/tasks/:taskId": "Partially update a task (UUID required)",
      "DELETE /api/tasks/:taskId": "Delete a task by ID (UUID required)"
    }
  });
});

// Task routes
router.use('/tasks', tasksRouter);
router.use('/auth', authRouter);

export default router;
