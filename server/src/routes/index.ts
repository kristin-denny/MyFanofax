import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
import { userRouter } from './user-routes.js';

const router = Router();

router.use('/auth', authRoutes, userRouter);
router.use('/api', authenticateToken,  apiRoutes);

export default router;