import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';

const UserService = {
  async add(user: IUser): Promise<void> {
    await UserModel.add(user);
  },
};

export default UserService;