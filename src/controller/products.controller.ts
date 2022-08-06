import { IProduct } from '../interfaces/IProduct';
import ProductsService from '../services/products.service';

const ProductsController = {
  async add(product: IProduct): Promise<IProduct> {
    const result = await ProductsService.add(product);
    return result;
  },

  async getAll(): Promise<IProduct[]> {
    const result = await ProductsService.getAll();
    return result;
  }, 
};

export default ProductsController;