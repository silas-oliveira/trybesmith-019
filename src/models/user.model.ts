import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/IUser';
import connection from './connection';
import { createUser } from './queries';

const UserModel = {
  async add(user: IUser): Promise<void> {
    const { username, classe, level, password } = user;
    await connection.execute<ResultSetHeader>(
      createUser,
      [username, classe, level, password],
    );
  },
};

export default UserModel;
