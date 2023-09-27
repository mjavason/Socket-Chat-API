import { Router } from 'express';
import publicRoute from './public';
import adminRoute from './admin';
import userRoute from './user';
import { MESSAGES, STATUS_CODES } from '../../constants';

const router = Router();
router.get('/', (req, res) => {
  res
    .status(200)
    .send({ status_code: STATUS_CODES.SUCCESS, message: MESSAGES.WELCOME_V1, success: false });
  console.log(MESSAGES.WELCOME_V1);
});

router.use('/', publicRoute);
router.use('/', userRoute);
router.use('/', adminRoute);

export default router;
