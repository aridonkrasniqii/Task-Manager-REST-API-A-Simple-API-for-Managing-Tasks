import { Group } from '../entities/Group';
import { IGroup } from '../interfaces/IGroup';
import { GroupRepository } from '../repositories/GroupRepository';

export class GroupService {
  constructor(private groupRepository: GroupRepository) {}
  createGroup = async (
    name: string,
    description: string,
    valid: boolean
  ): Promise<IGroup> => {
    const group = new Group({
      name,
      description,
      valid
    });

    return this.groupRepository.createGroup(group);
  };

  getGroupById = async (groupId: string): Promise<IGroup> => {
    return this.groupRepository.getGroupById(groupId);
  };
  getAllGroups = async (): Promise<IGroup[]> => {
    return this.groupRepository.getAllGroups();
  };

  updateGroup = async (
    groupId: string,
    name: string,
    description: string,
    valid: boolean
  ): Promise<IGroup> => {
    const group = new Group({
      name,
      description,
      valid
    });
    return this.groupRepository.updateGroup(groupId, group);
  };

  deleteGroup = (groupId: string): Promise<IGroup> => {
    return this.groupRepository.deleteGroup(groupId);
  };
}
