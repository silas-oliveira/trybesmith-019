import { Router } from 'express';
import ProductsController from '../../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/', async (req, res, _next) => {
  const productsController = new ProductsController();
  const result = await productsController.add(req.body);
  return res.status(201).json(result);
});

export default productsRouter;