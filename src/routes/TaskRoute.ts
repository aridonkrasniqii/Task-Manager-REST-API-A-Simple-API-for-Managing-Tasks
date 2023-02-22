import express from 'express';
import { Router } from 'express';
import { Request, Response } from 'express';
import { TaskController } from '../controllers/TaskController';
import { TaskService } from '../services/TaskService';
import { TaskRepository } from '../repositories/TaskRepository';
const taskRouter = Router();

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

taskRouter.get('/', taskController.getAllTask);
taskRouter.post('/', taskController.createTask);
taskRouter.get('/:taskId', taskController.getTaskById);
taskRouter.put('/:taskId', taskController.updateTask);
taskRouter.delete('/:taskId', taskController.deleteTask);

export default taskRouter;
