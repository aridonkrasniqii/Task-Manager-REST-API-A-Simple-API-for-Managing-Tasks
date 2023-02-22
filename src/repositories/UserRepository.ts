import { User } from '../entities/User';
import { IUser } from '../interfaces/IUser';
export class UserRepository {
  createUser = async (user: IUser): Promise<IUser> => {
    return User.create(user);
  };

  getAllUsers = async (): Promise<IUser[]> => {
    return User.find();
  };

  getUserById = async (userId: string): Promise<IUser> => {
    return User.findById(userId);
  };

  updateUser = async (userId: string, entity: IUser): Promise<IUser> => {
    const existingUser = await User.findById(userId);
    if (!existingUser) throw new Error('User does not exist');
    return User.findByIdAndUpdate(userId, {
      name: entity.name,
      email: entity.email,
      password: entity.password
    });
  };

  deleteUser = async (userId: string): Promise<IUser> => {
    const existingUser = await User.findById(userId);
    if (!existingUser) throw new Error('User does not exist');
    return User.findByIdAndDelete(userId);
  };
}
