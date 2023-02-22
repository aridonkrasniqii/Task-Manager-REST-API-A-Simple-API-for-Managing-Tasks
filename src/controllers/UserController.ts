import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  constructor(private userService: UserService) {}
  loginUser = async (req: Request, res: Response): Promise<void> => {};
  logOut = async (req: Request, res: Response): Promise<void> => {};

  //
  //
  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).send(await this.userService.getAllUsers());
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };

  getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params['userId'] ?? '';
      res.status(200).send(await this.userService.getUserById(id));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };

  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.body['name'] ?? '';
      const email = req.body['email'] ?? '';
      const password = req.body['password'] ?? '';
      res
        .status(200)
        .send(await this.userService.createUser(name, email, password));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };
  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.params['userId'] ?? '';
      const name = req.body['name'] ?? '';
      const email = req.body['email'] ?? '';
      const password = req.body['password'] ?? '';
      res
        .status(200)
        .send(await this.userService.updateUser(userId, name, email, password));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };
  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.params['userId'] ?? '';
      res.status(200).send(await this.userService.deleteUser(userId));
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  };
}
