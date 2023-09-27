import express from 'express';
const router = express.Router();
import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);

export default router;
