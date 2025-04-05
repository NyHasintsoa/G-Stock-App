import ParentService from "./ParentService.js";

class ClientService extends ParentService {
  constructor() {
    super();
  }

  count() {
    return 123;
  }
}

export default ClientService;
