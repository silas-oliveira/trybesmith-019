import { ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/IProduct';
import connection from './connection';
import { createProduct, getAllProducts } from './queries';

const ProductsModel = {
  async getAll(): Promise<IProduct[]> {
    const result = await connection
      .execute(getAllProducts);
    const [rows] = result;
    return rows as IProduct[];
  },

  async add(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const result = await connection.execute<ResultSetHeader>(
      createProduct,
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  },
};

export default ProductsModel;
