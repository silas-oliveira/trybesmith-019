import { IUser } from '../interfaces/IUser';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

const UserController = {
  async add(user: IUser): Promise<void | string> {
    const createToken = AuthService.createToken(user);
    await UserService.add(user);
    return createToken;
  },
};

export default UserController;