import { IProduct } from '../interfaces/IProduct';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async add(product: IProduct): Promise<IProduct> {
    const result = await this.model.add(product);
    return result;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default ProductsService;