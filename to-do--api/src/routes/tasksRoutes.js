import express from 'express';
import { body, param } from 'express-validator';

// Using express-validator: https://express-validator.github.io/docs/

import { deleteTask, getTask, getTasks, getTaskStatus, patchTask, postTask, putTask } from '../controllers/tasksController.js';
import TaskStatus from '../models/enums/TaskStatus.js';

const tasksRouter = express.Router();

tasksRouter.get('/', getTasks);
tasksRouter.get('/task-status', getTaskStatus);

tasksRouter.get('/:taskId', param('taskId').notEmpty().withMessage('Task id cannot be empty').isUUID().withMessage('Task id must be an UUID'), getTask);

tasksRouter.post('/', [
  body('title').exists().withMessage('You must provide a title').notEmpty().withMessage('Title cannot be empty'),
    body('description').exists().withMessage('You must provide a description'),
    body('status').exists().withMessage('You must provide a status').notEmpty().withMessage('Status cannot be empty').isIn(Object.values(TaskStatus)).withMessage(`Status must be one of: ${Object.values(TaskStatus).join(', ')}`)
], postTask);

tasksRouter.put('/:taskId', [
    param('taskId').notEmpty().withMessage('Task id cannot be empty').isUUID().withMessage('Task id must be an UUID'),
    body('title').exists().withMessage('You must provide a title').notEmpty().withMessage('Title cannot be empty'),
    body('description').exists().withMessage('You must provide a description'),
    body('status').exists().withMessage('You must provide a status').notEmpty().withMessage('Status cannot be empty').isIn(Object.values(TaskStatus)).withMessage(`Status must be one of: ${Object.values(TaskStatus).join(', ')}`)
], putTask);

tasksRouter.patch(
    '/:taskId', [
      param('taskId')
        .notEmpty()
        .withMessage('Task id cannot be empty')
        .isUUID()
        .withMessage('Task id must be an UUID'),
      body('title').optional().notEmpty().withMessage('Title cannot be empty'),
      body('description').optional(),
      body('status')
        .optional()
        .notEmpty()
        .withMessage('Status cannot be empty')
        .isIn(Object.values(TaskStatus))
        .withMessage(`Status must be one of: ${Object.values(TaskStatus).join(', ')}`),
], patchTask);

tasksRouter.delete('/:taskId', param('taskId').notEmpty().withMessage('Task id cannot be empty').isUUID().withMessage('Task id must be an UUID'), deleteTask);

export default tasksRouter;
