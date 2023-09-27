import { Request, Response } from 'express';
import { mailService, userService } from '../services';
import { SITE_LINK } from '../constants';
import logger from '../helpers/logger';

class Controller {
  async message(message: string) {
    return message;
  }
}

export const socketController = new Controller();
