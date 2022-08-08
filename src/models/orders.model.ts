import connection from './connection';
import { getAllOrders } from './queries';

const OrderModel = {
  async getAll() {
    const [result]: any = await connection.execute(getAllOrders);
    const joinProductsId = result.map((order: any) => {
      const newOrder: any = { id: order.id, userId: order.userId, productsIds: [] };
      result.forEach((ord: any) => {
        if (order.id === ord.id) {
          newOrder.productsIds.push(ord.productsIds);
        }
      });
      return newOrder;
    });
    joinProductsId.pop();
    return joinProductsId;
  },
};

export default OrderModel;
