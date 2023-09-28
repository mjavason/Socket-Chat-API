import { Router } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { userController } from '../../../controllers';
import { authValidation } from '../../../validation';

// Generate a unique reset token and send a reset email
router.post(
  '/reset-password-email/:email',
  processRequestParams(authValidation.resetPasswordEmail.params),
  userController.resetPasswordMail,
);

// Reset the user's password
router.post(
  '/reset-password/:token',
  processRequestBody(authValidation.resetPasswordToken.body),
  userController.resetPassword,
);

router.post('/register', processRequestBody(authValidation.register.body), userController.register);
router.post('/login', processRequestBody(authValidation.login.body), userController.login);

export default router;
