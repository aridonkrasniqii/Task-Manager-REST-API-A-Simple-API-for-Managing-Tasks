import { Response, Request } from 'express';
import { GroupService } from '../services/GroupService';

export class GroupController {
  constructor(private groupService: GroupService) {}
  createGroup = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.body['name'] ?? '';
      const description = req.body['description'] ?? '';
      const valid = req.body['valid'] ?? '';
      res
        .status(200)
        .send(await this.groupService.createGroup(name, description, valid));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };

  getGroupById = async (req: Request, res: Response): Promise<void> => {
    try {
      const groupId = req.params['groupId'] ?? '';
      res.status(200).send(await this.groupService.getGroupById(groupId));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };

  getAllGroups = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).send(await this.groupService.getAllGroups());
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };

  updateGroup = async (req: Request, res: Response): Promise<void> => {
    try {
      const groupId = req.params['groupId'] ?? '';
      const name = req.body['name'] ?? '';
      const description = req.body['description'] ?? '';
      const valid = req.body['valid'] ?? '';
      res
        .status(200)
        .send(
          await this.groupService.updateGroup(groupId, name, description, valid)
        );
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };

  deleteGroup = async (req: Request, res: Response): Promise<void> => {
    try {
      const groupId = req.params['groupId'] ?? '';
      res.status(200).send(await this.groupService.deleteGroup(groupId));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };
}
