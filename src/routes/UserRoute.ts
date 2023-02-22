import express from 'express';
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';

const userRouter = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:userId', userController.getUserById);
userRouter.put('/:userId', userController.updateUser);
userRouter.delete('/:userId', userController.deleteUser);

export default userRouter;
