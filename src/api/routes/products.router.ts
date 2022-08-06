import { Router } from 'express';
import ProductsController from '../../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/', async (req, res, _next) => {
  const result = await ProductsController.add(req.body);
  return res.status(201).json(result);
});

productsRouter.get('/', async (_req, res, _next) => {
  const result = await ProductsController.getAll();
  return res.status(200).json(result);
});

export default productsRouter;