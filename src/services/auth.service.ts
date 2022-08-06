import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import { ExpiredOrInvalidToken, TokenNotFound } from '../utils/throw.error';
import PasswordService from './password.service';

dotenv.config();

const AuthService = {
  createToken(user: IUser) {
    const userWithotPassword = PasswordService.removePassword(user);
    const tokenCreate = jwt.sign(userWithotPassword, process.env.JWT_SECRET as string, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return tokenCreate;
  },
  
  validateToken(authorization: string) {
    if (authorization) TokenNotFound();
    try {
      const infoToken = jwt.verify(authorization, process.env.JWT_SECRET as string);
      return infoToken;
    } catch (error) {
      ExpiredOrInvalidToken();
    }
  },
};

export default AuthService;
