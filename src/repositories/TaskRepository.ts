import { ITask } from '../interfaces/ITask';
import { Task } from '../entities/Task';

export class TaskRepository {
  createTask = async (entity: ITask): Promise<ITask> => {
    console.log('Executed');
    return Task.create(entity);
  };

  getAllTasks = async (): Promise<ITask[]> => {
    return Task.find({});
  };

  getTaskById = async (taskId: string): Promise<ITask> => {
    return Task.findById(taskId);
  };
  updateTask = async (taskId: string, entity: ITask): Promise<ITask> => {
    return Task.findByIdAndUpdate(taskId, {
      description: entity.description,
      completed: entity.completed,
      owner: entity.owner
    });
  };

  deleteTask = async (taskId: string): Promise<ITask> => {
    return Task.findByIdAndDelete(taskId);
  };
}
