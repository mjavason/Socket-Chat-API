import { Router } from 'express';
const router = Router();
import { socketController } from '../../../controllers';
// import { socketValidation } from '../../../validation';
import { processRequestBody } from 'zod-express-middleware';

//get a socket question
router.get('/', socketController.message);

//answer a socket question
router.post(
  '/answer',
  socketController.message,
);

export default router;
