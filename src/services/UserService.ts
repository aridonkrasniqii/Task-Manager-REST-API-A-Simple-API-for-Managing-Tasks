import { User } from '../entities/User';
import { IUser } from '../interfaces/IUser';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<IUser> {
    const user = new User({
      name,
      email,
      password
    });
    return this.userRepository.createUser(user);
  }

  getAllUsers = async (): Promise<IUser[]> => {
    return this.userRepository.getAllUsers();
  };

  getUserById = (userId: string): Promise<IUser> => {
    return this.userRepository.getUserById(userId);
  };
  updateUser = (
    userId: string,
    name: string,
    email: string,
    password: string
  ): Promise<IUser> => {
    const user = new User({ name, email, password });
    return this.userRepository.updateUser(userId, user);
  };

  deleteUser = async (userId: string): Promise<IUser> => {
    return this.userRepository.deleteUser(userId);
  };
}
