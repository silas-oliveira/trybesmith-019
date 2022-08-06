import { IProduct } from '../interfaces/IProduct';
import ProductsModel from '../models/products.model';

const ProductsService = {
  async add(product: IProduct): Promise<IProduct> {
    const result = await ProductsModel.add(product);
    return result;
  },

  async getAll(): Promise<IProduct[]> {
    const result = await ProductsModel.getAll();
    return result;
  },
};

export default ProductsService;