import OrderService from '../services/orders.service';

const OrderController = {
  async getAll() {
    const result = await OrderService.getAll();
    return result;
  }, 
};

export default OrderController;