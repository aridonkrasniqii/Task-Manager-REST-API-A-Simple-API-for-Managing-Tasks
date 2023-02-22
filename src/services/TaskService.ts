import mongoose from 'mongoose';
import { Task } from '../entities/Task';
import { ITask } from '../interfaces/ITask';
import { TaskRepository } from '../repositories/TaskRepository';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  getAllTasks = async (): Promise<ITask[]> => {
    return this.taskRepository.getAllTasks();
  };

  createTask = async (
    description: string,
    completed: boolean,
    owner: mongoose.Schema.Types.ObjectId
  ): Promise<ITask> => {
    const task = new Task({ description, completed, owner });
    return this.taskRepository.createTask(task);
  };

  getTaskById = async (taskId: string): Promise<ITask> => {
    return this.taskRepository.getTaskById(taskId);
  };

  updateTask = async (
    taskId: string,
    description: string,
    completed: boolean,
    owner: mongoose.Schema.Types.ObjectId
  ) => {
    const task = new Task({ description, completed, owner });
    return this.taskRepository.updateTask(taskId, task);
  };

  deleteTask = async (taskId: string): Promise<ITask> => {
    return this.taskRepository.deleteTask(taskId);
  };
}
