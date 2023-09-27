import Model from '../database/models/user.model';
import Interface from '../interfaces/user.interface';

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

  async findOneReturnPassword(searchData: object) {
    return Model.findOne({ ...searchData, deleted: false }).select('-__v +password');
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

  async hardDelete(searchParams: Partial<Interface>) {
    return await Model.findOneAndDelete(searchParams).select('-__v');
  }
}

export const userService = new Service();
