import express from 'express';
import tasksRouter from './tasksRoutes.js';
const router = express.Router();

router.use('/tasks', tasksRouter);

export default router;
