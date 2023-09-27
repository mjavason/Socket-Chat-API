import { Request, Response } from 'express';
import { resetTokenService } from '../services';
import {
  SuccessResponse,
  InternalErrorResponse,
  NotFoundResponse,
} from '../helpers/response';
import { MESSAGES } from '../constants';

class Controller {
  async create(req: Request, res: Response) {
    const data = await resetTokenService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }

  async getAll(req: Request, res: Response) {
    let pagination = parseInt(req.params.pagination);
    if (!pagination) pagination = 1;
    const data = await resetTokenService.getAll(pagination);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async find(req: Request, res: Response) {
    const data = await resetTokenService.find(req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = await resetTokenService.update({ _id: id }, req.body);

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.UPDATED);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await resetTokenService.softDelete({ _id: id });

    if (!data) return NotFoundResponse(res);
    
    return SuccessResponse(res, data, MESSAGES.DELETED);
  }

  // Admins only
  async hardDelete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await resetTokenService.hardDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }
}

export const resetTokenController = new Controller();
