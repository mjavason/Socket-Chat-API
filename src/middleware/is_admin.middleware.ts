import { NextFunction, Request, Response } from 'express';
import {
  AuthFailureResponse,
  NotFoundResponse,
  ForbiddenResponse,
  BadRequestResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
  FailureMsgResponse,
  SuccessResponse,
  AccessTokenErrorResponse,
  TokenRefreshResponse,
} from '../helpers/response';
import { MESSAGES, STATUS_CODES } from '../constants';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  const loggedUser = user;
  if (loggedUser && loggedUser.role !== 'admin') {
    console.log('Invalid login details, not admin');
    return AuthFailureResponse(res);
  }
  return next();
};

export default isAdmin;
