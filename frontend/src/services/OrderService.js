import ParentService from "./ParentService.js";

class OrderService extends ParentService {
  constructor() {
    super("/api/orders");
  }
}

const orderService = new OrderService();

export default orderService;
