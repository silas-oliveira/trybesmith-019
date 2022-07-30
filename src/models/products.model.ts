import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/IProduct';
import createProduct from './queries';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // public async getAll(): Promise<Book[]> {
  //   const result = await this.connection
  //     .execute('SELECT * FROM books');
  //   const [rows] = result;
  //   return rows as Book[];
  // }

  public async add(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      createProduct,
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}