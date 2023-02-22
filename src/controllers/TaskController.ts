import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';
import { Task } from '../entities/Task';
export class TaskController {
  constructor(private taskService: TaskService) {}
  getAllTask = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).send(await this.taskService.getAllTasks());
    } catch (e) {
      res.status(400).send(e);
    }
  };
  createTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const description = req.body['description'];
      const completed = req.body['completed'];
      const owner = req.body['owner'];
      res
        .status(200)
        .send(await this.taskService.createTask(description, completed, owner));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };

  getTaskById = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskId = req.params['taskId'] ?? '';
      res.status(200).send(this.taskService.getTaskById(taskId));
    } catch (e) {
      res.status(400).send(e);
    }
  };

  updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskId = req.params['taskId'] ?? '';
      const description = req.body['description'] ?? '';
      const completed = req.body['completed'] ?? '';
      const owner = req.body['owner'] ?? '';
      res
        .status(200)
        .send(
          this.taskService.updateTask(taskId, description, completed, owner)
        );
    } catch (error) {
      res.status(400).send(error);
    }
  };

  deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskId = req.params['taksId'] ?? '';
      res.status(200).send(await this.taskService.deleteTask(taskId));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };
}
