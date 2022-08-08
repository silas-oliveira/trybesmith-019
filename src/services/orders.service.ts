import OrderModel from '../models/orders.model';

const OrderService = {
  async getAll() {
    const result = await OrderModel.getAll();
    return result;
  },
};

export default OrderService;