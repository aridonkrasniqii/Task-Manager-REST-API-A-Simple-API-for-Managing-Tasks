import { IGroup } from '../interfaces/IGroup';
import { Group } from '../entities/Group';

export class GroupRepository {
  getGroupById = async (taskId: string): Promise<IGroup> => {
    return Group.findById(taskId);
  };

  getAllGroups = async (): Promise<IGroup[]> => {
    return Group.find({});
  };

  createGroup = async (group: IGroup): Promise<IGroup> => {
    return Group.create(group);
  };

  updateGroup = async (taskId: string, entity: IGroup): Promise<IGroup> => {
    return Group.findByIdAndUpdate(taskId, {
      name: entity.name,
      description: entity.description,
      valid: entity.valid
    });
  };

  deleteGroup = async (taskId: string): Promise<IGroup> => {
    return Group.findByIdAndDelete(taskId);
  };
}
