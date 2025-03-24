import ParentService from "./ParentService.js";

class TypeService extends ParentService {
  constructor(requestPrefix) {
    super(requestPrefix);
  }
}

const typeService = new TypeService("/api/types");

export default typeService;
