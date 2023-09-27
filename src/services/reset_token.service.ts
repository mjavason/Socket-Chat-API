import Model from '../database/models/reset_token.model';

class Service {
  async create(body: object) {
    return await Model.create(body);
  }

  async getAll(pagination: number) {
    return await Model.find({ deleted: false })
      .limit(10)
      .skip(pagination)
      .sort({ createdAt: 'desc' })
      .select('-__v');
  }

  async update(searchDetails: object, update: object) {
    return await Model.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    }).select('-__v');
  }

  async find(searchData: object) {
    return await Model.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return Model.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  async softDelete(searchParams: object) {
    return await Model.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    ).select('-__v');
  }

  async hardDelete(searchParams: object) {
    return await Model.findOneAndDelete(searchParams).select('-__v');
  }
}

export const resetTokenService = new Service();
