import express from 'express';
import authRoute from './auth.route';
import limiter from '../../../middleware/rate_limiter.middleware';
const router = express.Router();

router.use('/auth', authRoute);
export default router;
