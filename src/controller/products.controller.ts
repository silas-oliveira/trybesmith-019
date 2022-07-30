import { IProduct } from '../interfaces/IProduct';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public async add(product: IProduct) {
    const result = await this.productsService.add(product);
    return result;
  }
}

export default ProductsController;