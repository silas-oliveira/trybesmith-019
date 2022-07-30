import { IProduct } from '../interfaces/IProduct';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public async add(product: IProduct): Promise<IProduct> {
    const result = await this.productsService.add(product);
    return result;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.productsService.getAll();
    return result;
  } 
}

export default ProductsController;