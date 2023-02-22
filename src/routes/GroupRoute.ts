import { Router } from 'express';
import { GroupController } from '../controllers/GroupController';
import { GroupRepository } from '../repositories/GroupRepository';
import { GroupService } from '../services/GroupService';

const groupRouter = Router();

const groupRepository = new GroupRepository();
const groupService = new GroupService(groupRepository);
const groupController = new GroupController(groupService);

groupRouter.post('/', groupController.createGroup);
groupRouter.put('/', groupController.updateGroup);
groupRouter.delete('/:groupId', groupController.deleteGroup);
groupRouter.get('/', groupController.getAllGroups);
groupRouter.get('/:groupId', groupController.getGroupById);

export default groupRouter;
