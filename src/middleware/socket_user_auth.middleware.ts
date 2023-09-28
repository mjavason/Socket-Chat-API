// userAuthMiddleware.js
import { NextFunction } from 'express';
import socket, { Socket } from 'socket.io';
import { ACCESS_TOKEN_SECRET } from '../constants';
import { BadRequestResponse } from '../helpers/response';
import { verifyJwt } from '../utils/jwt';
import logger from '../helpers/logger';

export async function userAuthMiddleware(accessToken: string) {
  try {
    if (!accessToken) {
      logger.info('Please pass in the access token');
      return false;
    }

    const decoded = await verifyJwt(accessToken, ACCESS_TOKEN_SECRET);

    if (!decoded) {
      logger.info('Invalid access token');
      return false;
    }

    console.log(decoded);
    return decoded;
  } catch (err: any) {
    console.log(err);
    return false;
  }
}
