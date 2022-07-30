import { IProduct } from '../interfaces/IProduct';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async add(product: IProduct): Promise<IProduct> {
    const products = await this.model.add(product);
    return products;
  }
}

export default ProductsService;