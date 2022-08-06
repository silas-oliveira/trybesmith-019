import { Router } from 'express';
import UserController from '../../controller/user.controller';

const userRouter = Router();

userRouter.post('/', async (req, res, _next) => {
  const result = await UserController.add(req.body);
  return res.status(201).json({ token: result });
});

export default userRouter;