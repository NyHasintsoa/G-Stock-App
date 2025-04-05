class ParentService {
  /**
   * @type {import("sequelize").Sequelize}
   */
  _sequelize;

  _model;

  _rowLimit = 10;

  /** @type {import("sequelize").FindOptions} */
  _findOptions = {};

  /**
   * Get All Fields
   * @return {Promise}
   */
  async getAll() {
    return await this._model.findAll(this._findOptions);
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
    const count = await this._model.count();
    const rows = await this._model.findAll({
      limit: this._rowLimit,
      offset: (parseInt(page) - 1) * this._rowLimit,
      attributes: this._findOptions.attributes ?? null,
      include: this._findOptions.include ?? null
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
    const result = await this._model.findByPk(id, this._findOptions);
    if (!result) throw new Error("Not Found");
    return result;
  }

  /**
   * Count All Items in the model
   * @param {Omit<import("sequelize").CountOptions>} options Count Options
   * @return {Promise}
   */
  async count(options = undefined) {
    return await this._model.count(options);
  }
}

export default ParentService;
