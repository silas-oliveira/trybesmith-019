import { Router } from 'express';
import OrderController from '../../controller/orders.controller';

const orderRouter = Router();

orderRouter.get('/', async (_req, res, _next) => {
  const result = await OrderController.getAll();
  return res.status(200).json(result);
});

export default orderRouter;