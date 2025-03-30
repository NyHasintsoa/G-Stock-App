class ParentService {
  /**
   * @type {import("sequelize").Sequelize}
   */
  _sequelize;

  _model;

  _rowLimit = 10;

  /**
   * Get All Fields
   * @return {Promise}
   */
  async getAll() {
    return await this._model.findAll();
  }

  /**
   * Get Paged Model
   * @param {import("fastify").FastifyRequest} req Reqeust from fastify
   * @return {Object}
   */
  async getAndCountAll(req) {
    let { page, size } = req.query;
    page = !isNaN(page) ? page : 1;
    this._rowLimit = !isNaN(size) ? parseInt(size) : 10;
    const { count, rows } = await this._model.findAndCountAll({
      limit: this._rowLimit,
      offset: (parseInt(page) - 1) * this._rowLimit
    });
    return {
      rows,
      page: {
        size: this._rowLimit,
        currentPage: parseInt(page),
        totalElements: count,
        totalPages: Math.ceil(count / this._rowLimit)
      }
    };
  }

  /**
   * Get Fields By Id
   * @param {String} id Primary key
   * @return  {Promize}
   */
  async getById(id) {
    const result = await this._model.findByPk(id);
    if (result === null) throw new Error("Not Found");
    return result;
  }
}

export default ParentService;
