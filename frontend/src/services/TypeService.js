import ParentService from "./ParentService.js";

class TypeService extends ParentService {
  constructor() {
    super("/api/types");
  }
}

const typeService = new TypeService();

export default typeService;
