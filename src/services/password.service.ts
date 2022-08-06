import { IUser } from '../interfaces/IUser';

const PasswordService = {
  removePassword(user: IUser) {
    const { password: NO, ...userWithotPassword } = user;
    return userWithotPassword;
  },  
};

export default PasswordService;