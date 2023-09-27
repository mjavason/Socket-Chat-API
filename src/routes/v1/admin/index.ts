import express from 'express';
const router = express.Router();
import isAdmin from '../../../middleware/is_admin.middleware';

router.use(isAdmin);

export default router;
